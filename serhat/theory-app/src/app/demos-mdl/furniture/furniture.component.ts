import { Component, OnInit, Input } from '@angular/core';
import * as Furniture from '../models/furniture';
import { Tisch } from '../models/furniture';

@Component({
  selector: 'app-furniture',
  templateUrl: './furniture.component.html',
  styleUrls: ['./furniture.component.css']
})
export class FurnitureComponent implements OnInit {

  @Input() someFurniture: any;
  @Input() myCouch: Furniture.Sofa;
  @Input() myTable: Furniture.Tisch;
  @Input() angleCouch: Furniture.EckSofa;
  @Input() uSofa: Furniture.UFormSofa;
  @Input() myFurniture: Furniture.Möbelstück;
  description: string;
  constructor() { }

  getClass(): string {
    if (this.someFurniture instanceof Furniture.UFormSofa) {
      this.description = 'This is a UFormSofa';
      return 'UFormSofa';
    }
    else if (this.someFurniture  instanceof Furniture.Sofa) {
      this.description = 'This is a Sofa';
      return 'Sofa';
    }
  }
  ngOnInit(): void {
    console.log('Furniture :>> ', Furniture);
  }
}
