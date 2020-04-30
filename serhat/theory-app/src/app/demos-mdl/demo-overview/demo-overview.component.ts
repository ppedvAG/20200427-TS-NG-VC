import { Component, OnInit } from '@angular/core';
import * as Furniture from '../models/furniture';

@Component({
  selector: 'app-demo-overview',
  templateUrl: './demo-overview.component.html',
  styleUrls: ['./demo-overview.component.css'],
})
export class DemoOverviewComponent implements OnInit {
  // Furniture
  myCouch: Furniture.Sofa;
  myUCouch: Furniture.UFormSofa;
  arabNumbers: number[];

  // Outputs
  seconds: number;
  startMessage: string;
  timerMessage: string;
  endMessage: string;
  endMessageFromChild: string;

  constructor() {
    this.myCouch = new Furniture.Sofa(345, 123, 150, 'red');
    this.myUCouch = new Furniture.UFormSofa(345, 123, 150, 'blue', 2, 3);
    this.arabNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  }

  ngOnInit(): void {}

  clickHandler() {

  }

  startHandler() {
    this.startMessage = 'Zeit gestartet';
    this.timerMessage = '';
    this.endMessage = '';
    this.endMessageFromChild = '';
  }

  tickHandler(ev: number) {
    this.timerMessage = `Restliche Zeit ${ev}`;
    if (ev === 0) {
      this.endMessage = 'Zeit abgelaufen.';
    }
  }

  endHandler(ev: number) {
    this.endMessageFromChild = 'Zeit abgelaufen.';
  }
}
