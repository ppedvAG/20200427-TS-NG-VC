import { Component, OnInit } from '@angular/core';
import * as Furniture from '../models/furniture';
import {Sofa} from '../models/furniture';
import { U_FormSofa } from '../models/furniture';


@Component({
  selector: 'app-demo-overview',
  templateUrl: './demo-overview.component.html',
  styleUrls: ['./demo-overview.component.css']
})
export class DemoOverviewComponent implements OnInit {
 myCouch: Furniture.Sofa;
myUCouch: Furniture.U_FormSofa;
arabNumbers: number[];

  constructor() { 
    this.myCouch = new Sofa(345, 123, 150,'red'); // farbe von Sofa in die Klasse rein
    this.myUCouch = new U_FormSofa(436, 345, 676, 'blue', 2, 1.5);
    this.arabNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  }

  ngOnInit(): void {
  }

}
