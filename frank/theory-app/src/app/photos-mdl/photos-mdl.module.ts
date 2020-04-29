import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingsComponent } from './ratings/ratings.component';
import { PhotosOverviewComponent } from './photos-overview/photos-overview.component';
import { PhotosComponent } from './photos/photos.component';
import { PhotoalbumComponent } from './photoalbum/photoalbum.component';



@NgModule({
  declarations: [RatingsComponent, PhotosOverviewComponent, PhotosComponent, PhotoalbumComponent],
  imports: [
    CommonModule
  ],
  exports: [
    PhotosOverviewComponent
  ]
})
export class PhotosMdlModule { }
