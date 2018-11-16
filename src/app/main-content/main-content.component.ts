import { Component, OnInit } from '@angular/core';
import { FiltersService } from '../filters.service';


@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {
  userDetails = [{
    id: 1,
    firstname: "John",
    lastname: "Doe",
    email: "john@example.com",
    gender:"male"
  },
  {
    id: 2,
    firstname: "Mary",
    lastname: "Moe",
    email: "mary@example.com",
    gender:"female"
    
  },
  {
    id: 3,
    firstname: "July",
    lastname: "Dooley",
    email: "july@example.com",
    gender:"female"
  }] ;
  
  filters = []
  constructor(private filtersService: FiltersService) { 
    this.filtersService.filterDataService.subscribe((resData:any)=>{
      this.userDetails = resData.data;
      this.filters = resData.filters;
    })
    // this.filtersService.filterDataService.subscribe((filters:any)=>{
    //   this.filters = filters;
    // })
  }

  ngOnInit() {
    
  }
  removeFilter(pill){
    let keepGoing = true;
    let keyIndex = -1;
    this.filters.forEach((item,index) => {
      if(keepGoing){
        if(item.key == pill.key && item.value == pill.value){
          keyIndex = index;
          keepGoing = false;
        }
      }
    })
    this.filters.splice(keyIndex,1);
    this.filtersService.removeFilterPill(pill);
  }
}
