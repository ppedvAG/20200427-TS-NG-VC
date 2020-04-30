import { Component, OnInit } from '@angular/core';

import {MyPhotos} from '../models/photo';
import { PhotosService } from '../services/photos.service';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-photoalbum',
  templateUrl: './photoalbum.component.html',
  styleUrls: ['./photoalbum.component.css']
})
export class PhotoalbumComponent implements OnInit {
  myPhotoArray: Array<MyPhotos>;
  myPhoto: MyPhotos;

  constructor(
    private ps: PhotosService,
    private msg: MessageService
  ) { }


  ngOnInit(): void {

    this.getPhotos();

  /*   fetch('https://jsonplaceholder.typicode.com/photos/')
    .then(response => response.json())
    .then( json => this.getAllPhotos(json)); */

  }

  getPhotos(): void {
    this.ps.getPhotos()
    .subscribe( photos => this.myPhotoArray = photos.slice(0, 20));
    console.log('this.msg.messages :>>', this.msg.messages);
  }

  addPhoto() {
    this.myPhoto = new MyPhotos( 23, 23, 'mein test', 'url', 'thumbnail' );
    this.ps.addPhoto(this.myPhoto);
    console.log('this.msg.messages :>> ', this.msg.messages);
  }

/*   getAllPhotos(photoArr: Array<MyPhotos>) {
    this.myPhotoArray = photoArr.slice(0, 20);
    console.log('this.myPhotoArray :>> ', this.myPhotoArray);
  } */



}
