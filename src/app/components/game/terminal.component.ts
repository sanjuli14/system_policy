import { Component, Input, Output, EventEmitter, ElementRef, ViewChild, AfterViewChecked } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Message } from '../../models/game.models';

@Component({
  selector: 'app-terminal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './terminal.component.html',
  styleUrl: './terminal.component.css'
})
export class TerminalComponent implements AfterViewChecked {
  @Input() messages: Message[] = [];
  @Input() isGlitch: boolean = false;
  @Input() isLoading: boolean = false;
  @Input() disabled: boolean = false;
  @Input() placeholder: string = 'Escribe un comando...';
  @Output() command = new EventEmitter<string>();

  @ViewChild('messagesContainer') messagesContainer!: ElementRef;

  inputValue: string = '';
  currentTime = new Date().toLocaleTimeString('es-ES', { hour12: false });

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  onEnter() {
    if (this.inputValue.trim() && !this.disabled) {
      this.command.emit(this.inputValue.trim());
      this.inputValue = '';
    }
  }

  private scrollToBottom() {
    try {
      const el = this.messagesContainer.nativeElement;
      el.scrollTop = el.scrollHeight;
    } catch(e) {}
  }
}