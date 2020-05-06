import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-roman-number',
  templateUrl: './roman-number.component.html',
  styleUrls: ['./roman-number.component.css']
})
export class RomanNumberComponent implements OnInit {
  @Input() zahl: number;

  /* object oder map? object! */
  /* Zugriff auf die Werte über die Punkt-Notation bei solchen Objekten ist aber unmöglich */
  romNumbers = {
    1: 'I',
    2: 'II',
    3: 'III',
    4: 'IV',
    5: 'V',
    6: 'VI',
    7: 'VII',
    8: 'VIII',
    9: 'IX'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
