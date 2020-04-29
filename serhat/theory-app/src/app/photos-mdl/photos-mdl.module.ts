import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarsComponent } from './stars/stars.component';
import { PhotosOverviewComponent } from './photos-overview/photos-overview.component';



@NgModule({
  declarations: [StarsComponent, PhotosOverviewComponent],
  imports: [
    CommonModule
  ],
  bootstrap: [PhotosOverviewComponent],
  exports: [PhotosOverviewComponent]
})
export class PhotosMdlModule { }
