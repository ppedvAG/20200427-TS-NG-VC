import { Component, OnInit, Input } from '@angular/core';

import * as Photo from '../models/photo';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  @Input() myPhoto: Photo.MyPhotos;

  constructor() { }

  ngOnInit(): void {
  }

}
