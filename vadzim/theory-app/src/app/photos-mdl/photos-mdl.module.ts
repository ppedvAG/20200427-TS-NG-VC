import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RatingComponent } from './rating/rating.component';
import { PhotosOverviewComponent } from './photos-overview/photos-overview.component';
import { PhotoComponent } from './photo/photo.component';
import { PhotoAlbumComponent } from './photo-album/photo-album.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [RatingComponent, PhotosOverviewComponent, PhotoComponent, PhotoAlbumComponent, LoginFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  bootstrap: [PhotosOverviewComponent],
  exports: [PhotosOverviewComponent]
})
export class PhotosMdlModule { }
