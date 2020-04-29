import { Component, OnInit } from '@angular/core';
import * as Furniture from '../models/furniture';
import { Sofa } from '../models/furniture';
import { UEckSofa } from '../models/furniture';

@Component({
  selector: 'app-demo-overview',
  templateUrl: './demo-overview.component.html',
  styleUrls: ['./demo-overview.component.css']
})
export class DemoOverviewComponent implements OnInit {

  myUCouch: Furniture.UEckSofa;
  myCouch: Furniture.Sofa;

  arabNumbers: number[];

  constructor() {
    this.myCouch = new Sofa(350, 124, 50, 'red');
    this.myUCouch = new UEckSofa(350, 124, 50, 'red', 3, 4);

    this.arabNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  }

  ngOnInit(): void {

  }

}
