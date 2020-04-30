import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DemoOverviewComponent } from './demos-mdl/demo-overview/demo-overview.component';
import { PhotosOverviewComponent } from './photos-mdl/photos-overview/photos-overview.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
 /*  {path: '', component: HomeComponent}, */
  {path: 'demos', component: DemoOverviewComponent},
  {path: 'photos', component: PhotosOverviewComponent},
  {path: '**', redirectTo: '/', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
