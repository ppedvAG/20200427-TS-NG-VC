import { Component, OnInit } from '@angular/core';
import * as Furniture from '../models/furniture';

@Component({
  selector: 'app-demo-overview',
  templateUrl: './demo-overview.component.html',
  styleUrls: ['./demo-overview.component.css']
})
export class DemoOverviewComponent implements OnInit {
  myCouch: Furniture.Sofa;
  myUCouch: Furniture.UFormSofa;
  arabNumbers: number[];
  constructor() {
    this.myCouch = new Furniture.Sofa(345, 123, 150, 'red');
    this.myUCouch = new Furniture.UFormSofa(345, 123, 150, 'blue', 2, 3);
    this.arabNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
   }

  ngOnInit(): void {
  }

}
