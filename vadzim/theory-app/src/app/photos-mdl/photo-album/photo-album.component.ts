import { Component, OnInit } from '@angular/core';
import Photo from '../models/photo';
import { PhotosService } from '../services/photos.service';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-photo-album',
  templateUrl: './photo-album.component.html',
  styleUrls: ['./photo-album.component.css']
})
export class PhotoAlbumComponent implements OnInit {
  photos: Array<Photo>
  constructor(
    private ps: PhotosService,
    private ms: MessageService
    ) { }

  getPhotos(): void {
    /* ersetzt durch Service & Observable */
    /* fetch('https://jsonplaceholder.typicode.com/photos/')
      .then(jsonstring => jsonstring.json())
      .then(photos => {
        this.photos = photos.slice(0, 15);
        console.log('this.photos :>> ', this.photos);
      }
        ) */

    this.ps.getPhotos()
      .subscribe(photos => this.photos = photos.slice(0, 15));
      console.log('this.ms.messages :>> ', this.ms.messages);

  }

  ngOnInit(): void {
    this.getPhotos();
  }

  async addPhoto(){
    let newPhoto: Photo = new Photo(3, 4000, 'sfgadfasdf', 'afafd', 'asdfgasdf');
    this.ps.addPhoto(newPhoto);

    const response = await fetch('https://jsonplaceholder.typicode.com/photos/', {
      method: 'POST',
      // mode: 'cors', // no-cors, *cors, same-origin
      // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      // credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      // redirect: 'follow', // manual, *follow, error
      // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(newPhoto) // body data type must match "Content-Type" header
    });
    console.log('response.json() :>> ', response.json());
    // return response.json(); // parses JSON response into native JavaScript objects
    console.log('this.ms.messages :>> ', this.ms.messages);
  }

}
