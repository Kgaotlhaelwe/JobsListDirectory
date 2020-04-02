import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-jobs',
  templateUrl: './search-jobs.component.html',
  styleUrls: ['./search-jobs.component.scss']
})
export class SearchJobsComponent implements OnInit {
  listJobs = [];
  moreInfo = {
    title:"" ,
    company_logo:"" ,
    description:"" ,
    url:""
  };
  constructor(private router: Router) {
    this.listJobs = this.router.getCurrentNavigation().extras.state.data ;

    console.log(this.listJobs)

  }

  ngOnInit(): void {
  }

  

  async showInfo(id){
   
    let url =`https://us-central1-mlab-challenge.cloudfunctions.net/job?id=${id}`
    let test  = await fetch(url) ;
    console.log(test)
    let j = await test.json();
    this.moreInfo = j ;
    console.log(this.moreInfo)
   
    
  }
}
