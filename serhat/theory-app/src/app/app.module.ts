import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemosMdlModule } from './demos-mdl/demos-mdl.module';
import { PhotosMdlModule } from './photos-mdl/photos-mdl.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DemosMdlModule,
    PhotosMdlModule,
    BrowserAnimationsModule,
    MatSliderModule
  ],
  exports: [MatSliderModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
