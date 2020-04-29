import { Component, OnInit } from '@angular/core';
import Photo from '../models/photo';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {
  myPhoto: Photo;

  constructor() { 
    
  }

  getPhotos() {
    fetch('https://jsonplaceholder.typicode.com/photos/1')
    .then(jsonstring => jsonstring.json())
    .then(object => {
      this.myPhoto = new Photo(
        object.albumId, 
        object.id, 
        object.title, 
        object.url, 
        object.thumbnailUrl); 
    })
  }
  ngOnInit(): void {
    this.getPhotos();
    
  }

}
