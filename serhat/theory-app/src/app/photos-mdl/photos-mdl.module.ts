import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StarsComponent } from './stars/stars.component';
import { PhotosOverviewComponent } from './photos-overview/photos-overview.component';
import { PhotosComponent } from './photos/photos.component';
import { PhotoalbumComponent } from './photoalbum/photoalbum.component';
import { LoginFormComponent } from './login-form/login-form.component';



@NgModule({
  declarations: [StarsComponent, PhotosOverviewComponent, PhotosComponent, PhotoalbumComponent, LoginFormComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  bootstrap: [PhotosOverviewComponent],
  exports: [PhotosOverviewComponent]
})
export class PhotosMdlModule { }
