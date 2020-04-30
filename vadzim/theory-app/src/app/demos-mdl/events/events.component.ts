import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  isHome: boolean = false;
  isHome1: boolean = false;
  isHome2: boolean = false;
  text: string = 'mose over me';
  constructor() { }


  ngOnInit(): void {
  }

  // ohne event object
  home(): void {
    this.isHome = true;
  }
  away(): void {
    this.isHome = false;
  }
  getText(): string {
    return this.isHome ? 'HOME' : 'AWAY';
  }

  // mehrere gleiche html-elemente ohne event-objekt
  home2(): void {
    this.isHome2 = true;
  }
  away2(): void {
    this.isHome2 = false;
  }
  getText2(): string {
    return this.isHome2 ? 'HOME' : 'AWAY';
  }

  // gleiche html-elemente mit event object
  home1(ev: MouseEvent) {
    this.isHome1 = true;
    console.log('ev.target :>> ', ev.target);
    (<HTMLElement>ev.target).textContent = this.getText1();
    (<HTMLElement>ev.target).style.backgroundColor = 'black';
    (<HTMLElement>ev.target).style.color = 'white';
  }
  away1(ev: MouseEvent) {
    this.isHome1 = false;
    (<HTMLElement>ev.target).innerText = this.getText1();
    (<HTMLElement>ev.target).style.backgroundColor = 'white';
    (<HTMLElement>ev.target).style.color = 'black';
  }
  getText1(): string {
    return this.isHome1 ? 'HOME' : 'AWAY';
  }

}
