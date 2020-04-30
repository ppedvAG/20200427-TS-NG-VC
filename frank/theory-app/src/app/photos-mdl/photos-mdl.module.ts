import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingsComponent } from './ratings/ratings.component';
import { PhotosOverviewComponent } from './photos-overview/photos-overview.component';
import { PhotosComponent } from './photos/photos.component';
import { PhotoalbumComponent } from './photoalbum/photoalbum.component';
import { LoginformComponent } from './loginform/loginform.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [RatingsComponent, PhotosOverviewComponent, PhotosComponent, PhotoalbumComponent, LoginformComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    PhotosOverviewComponent
  ]
})
export class PhotosMdlModule { }
