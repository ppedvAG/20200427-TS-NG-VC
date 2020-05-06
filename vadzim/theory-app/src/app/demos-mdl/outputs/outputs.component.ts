import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-outputs',
  templateUrl: './outputs.component.html',
  styleUrls: ['./outputs.component.css']
})
export class OutputsComponent implements OnInit {
  @Input() seconds: number = -1;
  @Output() startEvent: EventEmitter<void> = new EventEmitter<void>();
  // was nach oben geschickt werden soll, steht in den spitzen Klammern
  @Output() tickEvent: EventEmitter<number> = new EventEmitter<number>();
  @Output() endEvent: EventEmitter<string> = new EventEmitter<string>();

  remainingTime: number;
  intervalId: number;
  endMessage: string;

  constructor() { }

  ngOnInit(): void {
    if (this.seconds != NaN && this.seconds != -1) {
      this.handleTime();
    }
  }

  handleTime(): void {
    this.startEvent.emit();
    console.log('this.seconds :>> ', this.seconds);
    this.remainingTime = +this.seconds;
    this.intervalId = window.setInterval(() => {
      this.remainingTime--;
      this.tickEvent.emit(this.remainingTime);
      if (this.remainingTime <= 0) {
        this.endMessage = 'Meldung von der Kindkomponente: Zeit abgelaufen';
        this.endEvent.emit(this.endMessage);
        window.clearInterval(this.intervalId);
      }
    }, 1000);
  }

}
