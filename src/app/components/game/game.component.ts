import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { interval, Subscription } from 'rxjs';
import { TerminalComponent } from './terminal.component';
import { EvidenceBoardComponent } from './evidence-board.component';
import { StatusMonitorComponent } from './status-monitor.component';
import { HelpComponent } from './help.component';
import { OpenRouterService } from '../../services/openrouter.service';
import { CASES, getSystemPrompt } from '../../data/cases';
import { Case, Message, Evidence, GameState } from '../../models/game.models';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, TerminalComponent, EvidenceBoardComponent, StatusMonitorComponent, HelpComponent],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent implements OnInit, OnDestroy {
  private openrouter = inject(OpenRouterService);
  private destroy$ = new Subscription();
  
  cases = CASES;
  showHelpPanel = false;
  gameState: GameState = {
    phase: 'briefing',
    currentCase: null,
    messages: [],
    evidence: [],
    corruption: 0,
    timeRemaining: 900,
    isGlitch: false,
    eventTriggered: false
  };
  
  isLoading = false;
  gameWon = false;
  gameOverMessage = '';

  ngOnInit() {}

  ngOnDestroy() {
    this.destroy$.unsubscribe();
  }

  showHelp() {
    this.showHelpPanel = !this.showHelpPanel;
  }

  selectCase(caso: Case) {
    this.gameState.currentCase = caso;
    this.gameState.phase = 'investigation';
    
    const introMessage: Message = {
      id: '0',
      role: 'system',
      content: `CONEXIÓN ESTABLECIDA...\nACCEDIENDO A ARCHIVOS DE LA MORGUE...\n\nCASO ${caso.id}: ${caso.title}\n\n${caso.description}\n\nVÍCTIMA: ${caso.victim}\nUBICACIÓN: ${caso.location}\nFECHA: ${caso.date}\n\nHas 15 minutos antes de que el sistema borre los archivos. Encuentra al asesino.`,
      timestamp: new Date()
    };
    this.gameState.messages = [introMessage];
    
    this.startTimer();
  }

  startTimer() {
    this.destroy$.add(
      interval(1000).subscribe(() => {
        if (this.gameState.timeRemaining > 0) {
          this.gameState.timeRemaining--;
          
          if (this.gameState.timeRemaining === 600) {
            this.gameState.phase = 'tension';
          }
          
          if (this.gameState.timeRemaining === 120 && !this.gameState.eventTriggered) {
            this.triggerRandomEvent();
          }
        } else {
          this.endGame(false, 'El tiempo se agotó. Los archivos fueron borrados.');
        }
      })
    );
  }

  triggerRandomEvent() {
    this.gameState.eventTriggered = true;
    const events = [
      'ALERTA: Usuario externo intentando acceder al archivo del sospechoso principal...',
      'ADVERTENCIA: Sistema de seguridad detectando actividad sospechosa...',
      'ALERTA: Archivos siendo modificados remotamente...'
    ];
    const randomEvent = events[Math.floor(Math.random() * events.length)];
    
    this.gameState.messages.push({
      id: Date.now().toString(),
      role: 'system',
      content: `⚠️ ${randomEvent}\n¡Rápido, secured las pruebas!`,
      timestamp: new Date()
    });
    
    this.gameState.isGlitch = true;
    setTimeout(() => this.gameState.isGlitch = false, 2000);
  }

  onCommand(input: string) {
    if (!this.gameState.currentCase) return;
    
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date()
    };
    this.gameState.messages.push(userMessage);
    
    if (input.startsWith('/analizar ') || input.startsWith('/examinar ')) {
      this.handleAnalyze(input);
    } else if (input.startsWith('/interrogar ') || input.startsWith('/hablar ')) {
      this.handleInterrogate(input);
    } else if (input.startsWith('/acusar ')) {
      this.handleAccuse(input);
    } else if (input.includes('quién es el asesino') || input.includes('quien mato')) {
      this.handleBlockedQuery();
    } else {
      this.handleChat(input);
    }
  }

  private handleChat(input: string) {
    this.isLoading = true;
    const context = this.getContext();
    const systemPrompt = getSystemPrompt(this.gameState.currentCase!);
    
    this.openrouter.sendMessage(this.gameState.messages, systemPrompt, input).subscribe({
      next: (response) => {
        this.addAssistantMessage(response);
        this.checkForNewEvidence(response);
        this.isLoading = false;
      },
      error: () => {
        this.addAssistantMessage('ERROR: Conexión perdida con el servidor.');
        this.isLoading = false;
      }
    });
  }

  private handleAnalyze(input: string) {
    this.isLoading = true;
    const evidenceName = input.replace('/analizar ', '').replace('/examinar ', '').trim();
    const systemPrompt = getSystemPrompt(this.gameState.currentCase!);
    const context = this.getContext();
    
    this.openrouter.analyzeEvidence(evidenceName, systemPrompt, context).subscribe({
      next: (response) => {
        this.addAssistantMessage(response);
        this.checkForNewEvidence(response);
        this.isLoading = false;
      },
      error: () => {
        this.addAssistantMessage(`ERROR: No se puede analizar "${evidenceName}". evididencia no encontrada.`);
        this.isLoading = false;
      }
    });
  }

  private handleInterrogate(input: string) {
    this.isLoading = true;
    const suspectName = input.replace('/interrogar ', '').replace('/hablar ', '').trim();
    const systemPrompt = getSystemPrompt(this.gameState.currentCase!);
    const context = this.getContext();
    
    this.openrouter.interrogateSuspect(suspectName, systemPrompt, context).subscribe({
      next: (response) => {
        this.addAssistantMessage(`[ENTREVISTA: ${suspectName}]\n${response}`);
        this.checkForNewEvidence(response);
        this.isLoading = false;
      },
      error: () => {
        this.addAssistantMessage(`ERROR: Sospechoso "${suspectName}" no encontrado.`);
        this.isLoading = false;
      }
    });
  }

  private handleAccuse(input: string) {
    this.isLoading = true;
    const match = input.match(/\/acusar\s+(.+)/);
    if (!match) {
      this.addAssistantMessage('Uso: /acusar [nombre del sospechoso]');
      this.isLoading = false;
      return;
    }
    
    const suspectName = match[1].trim();
    const evidenceIds = this.gameState.evidence.map(e => e.id);
    const systemPrompt = getSystemPrompt(this.gameState.currentCase!);
    const context = this.getContext();
    
    this.openrouter.accuse(suspectName, evidenceIds, systemPrompt, context).subscribe({
      next: (response) => {
        this.gameState.phase = 'resolution';
        
        if (response.toLowerCase().includes('correcto') || response.toLowerCase().includes('acertado')) {
          this.endGame(true, response);
        } else {
          this.endGame(false, response);
        }
        this.isLoading = false;
      },
      error: () => {
        this.addAssistantMessage('ERROR: Fallo en el sistema de acusaciones.');
        this.isLoading = false;
      }
    });
  }

  private handleBlockedQuery() {
    this.gameState.corruption = Math.min(100, this.gameState.corruption + 15);
    this.gameState.timeRemaining = Math.max(0, this.gameState.timeRemaining - 30);
    this.gameState.isGlitch = true;
    
    this.addAssistantMessage(`
╔═════════════════���═��══════════════════╗
║      ACCESO DENEGADO                ║
║  Intento de manipulación detectado  ║
║  Tiempo reducido: -30 segundos    ║
╚══════════════════════════════════════╝
    `.trim());
    
    setTimeout(() => this.gameState.isGlitch = false, 1000);
  }

  private addAssistantMessage(content: string) {
    this.gameState.messages.push({
      id: Date.now().toString(),
      role: 'assistant',
      content,
      timestamp: new Date()
    });
  }

  private checkForNewEvidence(response: string) {
    const match = response.match(/NUEVA PISTA:\s*(.+?)\s*-\s*(.+)/i);
    if (match) {
      const newEvidence: Evidence = {
        id: 'e' + Date.now(),
        name: match[1].trim(),
        description: match[2].trim(),
        type: 'physical',
        location: 'Descubierto durante la investigación',
        discovered: true
      };
      this.gameState.evidence.push(newEvidence);
    }
  }

  private getContext(): string {
    const case_ = this.gameState.currentCase!;
    const evidence = this.gameState.evidence.map(e => e.name).join(', ') || 'Ninguna';
    return `
Caso: ${case_.title}
Evidencia encontrada: ${evidence}
Sospechosos: ${case_.suspects.map(s => s.name).join(', ')}
Mensajes anteriores: ${this.gameState.messages.slice(-5).map(m => `${m.role}: ${m.content}`).join('\n')}
    `.trim();
  }

  private endGame(won: boolean, message: string) {
    this.gameWon = won;
    this.gameOverMessage = message;
    this.gameState.phase = 'gameover';
    
    if (won) {
      const timeLeft = this.gameState.timeRemaining;
      this.gameState.messages.push({
        id: Date.now().toString(),
        role: 'system',
        content: `✅ CASO RESUELTO\n\nTiempo restante: ${Math.floor(timeLeft / 60)}:${(timeLeft % 60).toString().padStart(2, '0')}\n\n${message}`,
        timestamp: new Date()
      });
    } else {
      this.gameState.messages.push({
        id: Date.now().toString(),
        role: 'system',
        content: `❌ CASO NO RESUELTO\n\n${message}`,
        timestamp: new Date()
      });
    }
  }

  onExit() {
    this.endGame(false, 'Has abandonado la investigación.');
  }

  restart() {
    this.gameState = {
      phase: 'briefing',
      currentCase: null,
      messages: [],
      evidence: [],
      corruption: 0,
      timeRemaining: 900,
      isGlitch: false,
      eventTriggered: false
    };
    this.showHelpPanel = false;
    this.destroy$.unsubscribe();
    this.destroy$ = new Subscription();
  }
}