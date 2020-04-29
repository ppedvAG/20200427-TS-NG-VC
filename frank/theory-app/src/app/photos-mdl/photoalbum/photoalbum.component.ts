import { Component, OnInit } from '@angular/core';

import {MyPhotos} from '../models/photo';

@Component({
  selector: 'app-photoalbum',
  templateUrl: './photoalbum.component.html',
  styleUrls: ['./photoalbum.component.css']
})
export class PhotoalbumComponent implements OnInit {
  myPhotoArray: Array<MyPhotos>;
  myPhoto: MyPhotos;

  constructor() { }


  ngOnInit(): void {
    fetch('https://jsonplaceholder.typicode.com/photos/')
    .then(response => response.json())
    .then( json => this.getAllPhotos(json));

  }

  getAllPhotos(photoArr: Array<MyPhotos>) {

    this.myPhotoArray = photoArr.slice(0, 20);

    console.log('this.myPhotoArray :>> ', this.myPhotoArray);
  }

}
