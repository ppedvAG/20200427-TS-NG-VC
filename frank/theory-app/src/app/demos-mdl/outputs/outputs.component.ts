import { Component, OnInit, Output, Input } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-outputs',
  templateUrl: './outputs.component.html',
  styleUrls: ['./outputs.component.css']
})
export class OutputsComponent implements OnInit {

  @Input() seconds: number;
  @Output() startEvent: EventEmitter<void> = new EventEmitter<void>();
  @Output() tickEvent: EventEmitter<number> = new EventEmitter<number>();
  @Output() endeEvent: EventEmitter<string> = new EventEmitter<string>();

  remainingTime: number;
  intervalId: number;
  endMessage: string;

  constructor() { }

  ngOnInit(): void {
  }

  handleClick(): void {
    console.log('seconds :>> ', this.seconds);
    this.remainingTime = this.seconds;
    this.startEvent.emit();
    this.intervalId = window.setInterval(() => {
      this.remainingTime --;
      this.tickEvent.emit(this.remainingTime);
      if (this.remainingTime <= 0) {
        this.endMessage = 'Meldung von der Kindkomponente: Zeit abgelaufen';
        this.endeEvent.emit(this.endMessage);
        window.clearInterval(this.intervalId);
      }
    } , 1000);
  }

}
