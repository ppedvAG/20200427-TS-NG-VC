import { Component, OnInit, Input } from '@angular/core';
import * as Furniture from '../models/furniture';

/* im Object sind nur Klassen enthalten */

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

    if (this.someFurniture instanceof Furniture.UEckSofa) {
      this.description = 'Es ist eine U-Form Sofa';
      return 'ucouch';
    }
    if (this.someFurniture instanceof Furniture.Sofa) {
      this.description = 'Es ist eine Sofa';
      return 'couch';
    }

  }

  ngOnInit(): void {
    console.log('Furniture :>> ', Furniture);
  }

}
