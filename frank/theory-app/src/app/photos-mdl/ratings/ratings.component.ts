import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.css']
})
export class RatingsComponent implements OnInit {

  @Input() starsNumber: number;
  starsString: string;

  getColor2(): string {
    if (this.starsNumber >= 3) {
      console.log('starsNumber :>> ', this.starsNumber);
      return 'good';
    }
    return 'bad';
  }
  constructor() { }

  ngOnInit(): void {

    if (this.starsNumber > 5) {
      this.starsNumber = 5;
    }
    if (this.starsNumber <= 0) {
      this.starsNumber = 1;
    }
    this.starsString = '*'.repeat(this.starsNumber);
  }

}
