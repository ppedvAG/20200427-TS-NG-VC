import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RatingComponent } from './rating/rating.component';
import { PhotosOverviewComponent } from './photos-overview/photos-overview.component';
import { PhotoComponent } from './photo/photo.component';
import { PhotoAlbumComponent } from './photo-album/photo-album.component';
import { LoginFormComponent } from './login-form/login-form.component';



@NgModule({
  declarations: [RatingComponent, PhotosOverviewComponent, PhotoComponent, PhotoAlbumComponent, LoginFormComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  bootstrap: [PhotosOverviewComponent],
  exports: [PhotosOverviewComponent]
})
export class PhotosMdlModule { }
