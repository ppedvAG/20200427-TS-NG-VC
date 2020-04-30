import { Component, OnInit } from '@angular/core';
import Photo from '../models/Photo';
import { PhotosService } from '../services/photos.service';
import { MessagesService } from '../services/messages.service';

@Component({
  selector: 'app-photoalbum',
  templateUrl: './photoalbum.component.html',
  styleUrls: ['./photoalbum.component.css']
})
export class PhotoalbumComponent implements OnInit {
  myPhotos: Array<Photo>;
  constructor(
    private ps: PhotosService,
    private ms: MessagesService
    ) { }

  ngOnInit(): void {

    /* fetch('https://jsonplaceholder.typicode.com/photos/')
    .then(response => response.json())
    .then( json => this.getAllPhotos(json)); */

    this.ps.getPhotos().subscribe(photos => this.myPhotos = photos.slice(0, 3));
    console.log('this.ms.messages :>> ', this.ms.messages);
  }

  getAllPhotos(photoArr: Array<Photo>) {

    this.myPhotos = photoArr.slice(0, 20);

    console.log('this.myPhotos :>> ', this.myPhotos);
  }

  addPhoto() {
    let newPhoto: Photo = new Photo(3, 4000, 'Fritzbox', 'asd', 'asdfgh');
    this.ps.addPhoto(newPhoto);
    console.log('newPhoto :>> ', newPhoto);
  }
}
