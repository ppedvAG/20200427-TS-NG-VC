import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  isHome: boolean = false;
  isHome1: boolean = false;
  text: string = 'mouse over me';

  constructor() { }

  ngOnInit(): void {
  }

  // Without event object
  home(): void {
    this.isHome = true;
  }

  away(): void {
    this.isHome = false;
  }

  // With event object
  home1(ev: MouseEvent): void {
    this.isHome1 = true;
    (<HTMLElement>ev.target).textContent = this.getText();
    (<HTMLElement>ev.target).style.backgroundColor = 'white';
    (<HTMLElement>ev.target).style.color = 'black';
  }

  away1(ev: Event): void {
    this.isHome1 = false;
    (<HTMLElement>ev.target).textContent = this.getText1();
    (<HTMLElement>ev.target).style.backgroundColor = 'black';
    (<HTMLElement>ev.target).style.color = 'white';
  }

  getText(): string {
    return this.isHome ? 'HOME' : 'AWAY';
  }

  getText1(): string {
    return this.isHome1 ? 'HOME' : 'AWAY';
  }
}
