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

  getColor(): string {
    if (this.suit === 'hearts' || this.suit === 'diamonds') {
      return 'red';
    }
    return 'black';
  }

  ngOnInit(): void {
  }

}
