import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { DatabasePageComponent } from './database-page/database-page.component';
import { ApiFetchingPageComponent } from './api-fetching-page/api-fetching-page.component';
import { ChartPageComponent } from './chart-page/chart-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FormsModule } from '@angular/forms';
import { MockDataPageComponent } from './mock-data-page/mock-data-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    DatabasePageComponent,
    ApiFetchingPageComponent,
    ChartPageComponent,
    NavBarComponent,
    MockDataPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
