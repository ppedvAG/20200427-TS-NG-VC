import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemosMdlModule } from './demos-mdl/demos-mdl.module';
import { PhotosMdlModule } from './photos-mdl/photos-mdl.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DemosMdlModule,
    PhotosMdlModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
