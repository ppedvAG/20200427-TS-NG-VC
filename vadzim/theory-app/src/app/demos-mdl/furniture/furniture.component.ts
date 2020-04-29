import { Component, OnInit, Input, Output } from '@angular/core';
import * as Furniture from '../models/furniture';
/* im Objekt Furniture sind nur Klassen drin */
// import { Tisch }  from '../models/furniture';

@Component({
  selector: 'app-furniture',
  templateUrl: './furniture.component.html',
  styleUrls: ['./furniture.component.css']
})
export class FurnitureComponent implements OnInit {
  @Input() someFurniture: any;

  @Input() myTable: Furniture.Tisch;
  @Input() myAngleCouch: Furniture.EckSofa;
  @Input() myFurniture: Furniture.Möbelstück;
 

  description: string;
  constructor() { }

  getClass(): string {
    // someFurniture ist gleichzeitig Instanz von Sofa und U_FormSofa, deswegen: 
    // vom spezielleren zum allgemeineren
    if (this.someFurniture instanceof Furniture.U_FormSofa) {
      this.description = 'es ist ein U-Sofa';
      return 'ucouch';
    }
    if (this.someFurniture instanceof Furniture.Sofa) {
      this.description = 'es ist ein Sofa';
      return 'couch';
    }
  }
  ngOnInit(): void {
    console.log('Furniture :>> ', Furniture);
    // console.log('typeof Furniture.Möbelstück :>> ', typeof Furniture.Möbelstück);
  }

}
