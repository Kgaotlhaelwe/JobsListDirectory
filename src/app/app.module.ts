import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { ImagesComponent } from './images/images.component';
import { SearchJobsComponent } from './search-jobs/search-jobs.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    
    ImagesComponent,
    SearchJobsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
