import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "../app/home/home.component"

import {SearchJobsComponent} from "../app/search-jobs/search-jobs.component"


const routes: Routes = [
 {path:'' , component:HomeComponent} ,
 {path:"searchedJob" , component:SearchJobsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
