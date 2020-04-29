import { Component, OnInit } from '@angular/core';

import * as Photo from '../models/photo';

@Component({
  selector: 'app-photos-overview',
  templateUrl: './photos-overview.component.html',
  styleUrls: ['./photos-overview.component.css']
})
export class PhotosOverviewComponent implements OnInit {

  myPhoto: Photo.MyPhotos;

  constructor() { }


  ngOnInit(): void {
    fetch('https://jsonplaceholder.typicode.com/photos/1')
    .then(response => response.json())
    .then(
      object => {
        console.log('object :>> ', object);
        this.myPhoto = new Photo.MyPhotos(
        object.albumId,
        object.id,
        object.title,
        object.url,
        object.thumbnailUrl
      );
        console.log('this.myFoto :>> ', this.myPhoto);
      }
     );

  }



}
