import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() value: string;
  @Input() suit: string;

  constructor() { }

  getColor() {
    if (this.suit === 'hearts' || this.suit === 'diamonds') {
      return 'red';
    }
    else {
      return 'black';
    }
  }

  ngOnInit(): void {
  }

}
