import { Component, OnInit } from '@angular/core';
import Photo from '../models/photo';
import { PhotosService } from '../services/photos.service';

@Component({
  selector: 'app-photo-album',
  templateUrl: './photo-album.component.html',
  styleUrls: ['./photo-album.component.css']
})
export class PhotoAlbumComponent implements OnInit {
  photos: Array<Photo>
  constructor(private ps: PhotosService) { }

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

  }

  ngOnInit(): void {
    this.getPhotos();
  }

}
