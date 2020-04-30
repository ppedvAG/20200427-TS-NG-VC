import { Component, OnInit } from '@angular/core';
import Photo from '../models/Photo';

@Component({
  selector: 'app-photoalbum',
  templateUrl: './photoalbum.component.html',
  styleUrls: ['./photoalbum.component.css']
})
export class PhotoalbumComponent implements OnInit {
  myPhotos: Array<Photo>;
  constructor() { }

  ngOnInit(): void {

    fetch('https://jsonplaceholder.typicode.com/photos/')
    .then(response => response.json())
    .then( json => this.getAllPhotos(json));
  }

  getAllPhotos(photoArr: Array<Photo>) {

    this.myPhotos = photoArr.slice(0, 20);

    console.log('this.myPhotos :>> ', this.myPhotos);
  }

}
