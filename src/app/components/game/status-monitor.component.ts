import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-status-monitor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './status-monitor.component.html',
  styleUrl: './status-monitor.component.css'
})
export class StatusMonitorComponent {
  @Input() timeRemaining: number = 900;
  @Input() corruption: number = 0;
  @Input() phase: string = 'briefing';
  @Output() exit = new EventEmitter<void>();

  get phaseDisplay(): string {
    const map: Record<string, string> = {
      'briefing': 'INICIALIZACIÓN',
      'investigation': 'INVESTIGACIÓN',
      'tension': 'TENSIÓN',
      'resolution': 'RESOLUCIÓN',
      'gameover': 'FINALIZADO'
    };
    return map[this.phase] || this.phase.toUpperCase();
  }

  formatTime(seconds: number): string {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }

  onExit() {
    this.exit.emit();
  }
}