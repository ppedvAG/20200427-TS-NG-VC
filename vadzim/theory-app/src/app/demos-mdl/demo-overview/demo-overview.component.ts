import { Component, OnInit } from '@angular/core';
import * as Furniture from '../models/furniture';
import { Sofa } from '../models/furniture';
import { U_FormSofa } from '../models/furniture';


@Component({
  selector: 'app-demo-overview',
  templateUrl: './demo-overview.component.html',
  styleUrls: ['./demo-overview.component.css']
})
export class DemoOverviewComponent implements OnInit {
  // for furniture component
  myCouch: Furniture.Sofa;
  myUCouch: Furniture.U_FormSofa;
  arabNumbers: number[];

  // for outputs component
  scnds: number;
  startMessage: string;
  timerMessage: string;
  endMessage: string;
  endMessageFromChild: string;

  constructor() {
    this.myCouch = new Sofa(345, 123, 150, 'red'); // farbe von Sofa in die Klasse rein
    this.myUCouch = new U_FormSofa(436, 345, 676, 'blue', 2, 1.5);
    this.arabNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  }

  ngOnInit(): void {
  }
  clickHandler(sec: number) {
    this.scnds = sec;
  }

  startHandler() {
    this.startMessage = 'Zeit gestartet';
  }
  tickHandler(ev: number) {
    this.timerMessage = `restliche Zeit ${ev}`;
    if (ev === 0) this.endMessage = 'Zeit abgelaufen';
  }
  endHandler(ev: string) {
    this.endMessageFromChild = ev;
  }

}
