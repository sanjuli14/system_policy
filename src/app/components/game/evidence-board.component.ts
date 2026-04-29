import { Component, Input, ElementRef, ViewChild, AfterViewChecked } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Evidence } from '../../models/game.models';

@Component({
  selector: 'app-evidence-board',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './evidence-board.component.html',
  styleUrl: './evidence-board.component.css'
})
export class EvidenceBoardComponent implements AfterViewChecked {
  @Input() evidence: Evidence[] = [];
  @ViewChild('evidenceList') evidenceList!: ElementRef;

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  private scrollToBottom() {
    try {
      const el = this.evidenceList.nativeElement;
      el.scrollTop = el.scrollHeight;
    } catch(e) {}
  }
}