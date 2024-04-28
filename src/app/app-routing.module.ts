import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { DatabasePageComponent } from './database-page/database-page.component';
import { ApiFetchingPageComponent } from './api-fetching-page/api-fetching-page.component';
import { ChartPageComponent } from './chart-page/chart-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'database-page', component: DatabasePageComponent },
  { path: 'api-fetching-page', component: ApiFetchingPageComponent },
  { path: 'chart-page', component: ChartPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
