import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeComponent } from './time/time.component';
import { CardComponent } from './card/card.component';
import { DemoOverviewComponent } from './demo-overview/demo-overview.component';
import { FurnitureComponent } from './furniture/furniture.component';



@NgModule({
  declarations: [TimeComponent, CardComponent, DemoOverviewComponent, FurnitureComponent],
  imports: [
    CommonModule
  ],
  bootstrap: [DemoOverviewComponent],
  exports: [
    DemoOverviewComponent
  ]
})
export class DemosMdlModule { }
