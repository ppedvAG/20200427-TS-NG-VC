import { Component, OnInit, Input } from '@angular/core';
import Photo from '../models/photo';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {
  @Input() myPhoto: Photo;

  constructor() {     
  }
  ngOnInit(): void {  
  }
}
