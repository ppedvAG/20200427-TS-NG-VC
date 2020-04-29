import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarsComponent } from './stars/stars.component';
import { PhotosOverviewComponent } from './photos-overview/photos-overview.component';
import { PhotosComponent } from './photos/photos.component';
import { PhotoalbumComponent } from './photoalbum/photoalbum.component';



@NgModule({
  declarations: [StarsComponent, PhotosOverviewComponent, PhotosComponent, PhotoalbumComponent],
  imports: [
    CommonModule
  ],
  bootstrap: [PhotosOverviewComponent],
  exports: [PhotosOverviewComponent]
})
export class PhotosMdlModule { }
