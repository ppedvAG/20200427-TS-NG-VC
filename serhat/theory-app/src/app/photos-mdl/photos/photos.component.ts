import { Component, OnInit, Input } from '@angular/core';
import Photo from '../models/Photo';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  @Input() myPhoto: Photo;
  constructor() { }

  ngOnInit(): void {

  }
}
