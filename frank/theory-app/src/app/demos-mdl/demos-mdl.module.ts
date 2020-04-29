import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeComponent } from './time/time.component';
import { CardComponent } from './card/card.component';
import { DemoOverviewComponent } from './demo-overview/demo-overview.component';



@NgModule({
  declarations: [TimeComponent, CardComponent, DemoOverviewComponent],
  imports: [
    CommonModule
  ],
  bootstrap: [
    DemoOverviewComponent
  ],
  exports: [
    DemoOverviewComponent
  ]
})
export class DemosMdlModule { }
