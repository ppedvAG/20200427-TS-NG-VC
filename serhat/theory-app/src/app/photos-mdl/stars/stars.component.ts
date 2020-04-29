import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {
  @Input() starsNumber: number;
  starsString: string;

  constructor() { }

  ngOnInit(): void {
    this.starsString = '*'.repeat(this.starsNumber);
  }

}
