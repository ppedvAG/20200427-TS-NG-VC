import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingComponent } from './rating/rating.component';
import { PhotosOverviewComponent } from './photos-overview/photos-overview.component';
import { PhotoComponent } from './photo/photo.component';



@NgModule({
  declarations: [RatingComponent, PhotosOverviewComponent, PhotoComponent],
  imports: [
    CommonModule
  ],
  bootstrap: [PhotosOverviewComponent],
  exports: [PhotosOverviewComponent]
})
export class PhotosMdlModule { }
