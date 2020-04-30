// modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';

// components
import { TimeComponent } from './time/time.component';
import { CardComponent } from './card/card.component';
import { DemoOverviewComponent } from './demo-overview/demo-overview.component';
import { FurnitureComponent } from './furniture/furniture.component';
import { RomanNumberComponent } from './roman-number/roman-number.component';
import { PipesComponent } from './pipes/pipes.component';
import { EventsComponent } from './events/events.component';
import { OutputsComponent } from './outputs/outputs.component';
import { NgformComponent } from './ngform/ngform.component';
import { MaterialComponent } from './material/material.component';
import { MatOptgroup } from '@angular/material/core';

@NgModule({
  declarations: [TimeComponent, CardComponent, DemoOverviewComponent, FurnitureComponent, RomanNumberComponent, PipesComponent, EventsComponent, OutputsComponent, NgformComponent, MaterialComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatSliderModule,
    MatOptgroup
  ],
  bootstrap: [DemoOverviewComponent],
  exports: [
    DemoOverviewComponent
  ]
})
export class DemosMdlModule { }
