import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  isHome: boolean = false;
  myText: string = 'mouse over me';

  constructor() { }

  ngOnInit(): void {
  }

  home(): void {
    this.isHome = true;
  }

  away(): void {
    this.isHome = false;
  }


  homeObj(e: Event): void {
    (<HTMLElement>e.target).innerText = 'Home';
    (<HTMLElement>e.target).style.backgroundColor = 'yellow';
    (<HTMLElement>e.target).style.color = 'black';
    (<HTMLElement>e.target).style.fontSize = '2em';

  }

  awayObj(e: MouseEvent): void {
    (<HTMLElement>e.target).innerText = 'Away';
    (<HTMLElement>e.target).style.backgroundColor = 'black';
    (<HTMLElement>e.target).style.color = 'yellow';
    (<HTMLElement>e.target).style.fontSize = '1em';
  }


  getText(): string {
    return this.isHome ? 'HOME' : 'AWAY';
  }
}
