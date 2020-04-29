import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingComponent } from './rating/rating.component';
import { PhotosOverviewComponent } from './photos-overview/photos-overview.component';



@NgModule({
  declarations: [RatingComponent, PhotosOverviewComponent],
  imports: [
    CommonModule
  ],
  bootstrap: [PhotosOverviewComponent],
  exports: [PhotosOverviewComponent]
})
export class PhotosMdlModule { }
