import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingsComponent } from './ratings/ratings.component';
import { PhotosOverviewComponent } from './photos-overview/photos-overview.component';



@NgModule({
  declarations: [RatingsComponent, PhotosOverviewComponent],
  imports: [
    CommonModule
  ],
  exports: [
    PhotosOverviewComponent
  ]
})
export class PhotosMdlModule { }
