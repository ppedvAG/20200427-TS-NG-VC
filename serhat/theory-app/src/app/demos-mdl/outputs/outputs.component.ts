import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-outputs',
  templateUrl: './outputs.component.html',
  styleUrls: ['./outputs.component.css'],
})
export class OutputsComponent implements OnInit {
  @Input() seconds: number;
  @Output() startEvent: EventEmitter<void> = new EventEmitter<void>();
  @Output() tickEvent: EventEmitter<number> = new EventEmitter<number>();
  @Output() endEvent: EventEmitter<string> = new EventEmitter<string>();

  remainingTime: number;
  intervalId: number;
  endMessage: string;

  constructor() {}

  ngOnInit(): void {}

  handleClick(): void {
    this.seconds = Number((<HTMLInputElement>document.getElementById('secondsId')!).value);
    this.startEvent.emit();
    this.remainingTime = this.seconds;
    console.log('seconds :>> ', this.seconds);
    this.intervalId = window.setInterval(() => {
      this.remainingTime--;
      this.tickEvent.emit(this.remainingTime);
      console.log('remainingTime :>> ', this.remainingTime);
      if (this.remainingTime === 0) {
        this.endMessage = 'Meldung von der Kindkomponente: Zeit abgelaufen';
        console.log('this.remainingTime :>> ', this.remainingTime);
        console.log('this.endMessage :>> ', this.endMessage);
        this.endEvent.emit(this.endMessage);
        window.clearInterval(this.intervalId); // *todo kann ich von allen anonymen Methoden in der Methode selbst returnen.
      }
    }, 1000);
  }
}
