import { Injectable } from '@angular/core';
import "rxjs/Rx";
import { Subject } from 'rxjs/Subject';
import { UsersService } from 'src/app/users.service';

@Injectable()
export class FiltersService {
  //private usersService: UsersService
  filterDataService = new Subject();
  filters = [];
 constructor(private usersService: UsersService) { }
 mainData = this.usersService.getAllUsers();

  addFilterPill(filter){
    //console.log("==",this.filters);
    if(this.filters.indexOf(filter) == -1){
      this.filters.push(filter);
    }
    this.filterDataService.next(this.filters);
  }
  removeFilterPill(pill){
    let res = [];
    let resObj = {
      data: {},
      filters:[]
    };
    if(this.filters.length == 0){
      resObj.data = this.mainData;
    }else{
      this.filters.forEach(obj => {
        this.mainData.forEach(element => {
            if(element[obj.key] == obj.value){
              res.push(element);
            }
        });
      })
      
      resObj.data = res;
      resObj.filters = this.filters
    }

    this.filterDataService.next(resObj);
  }


  applyFilter(filterObj){
    let res = [];
    let resObj = {
      data: {},
      filters:[]
    };
    let keepGoing = true;
    this.filters.forEach(element => {
      if(keepGoing) {
        if(element.value == filterObj.value && element.key == filterObj.key){
          keepGoing = false;
        }
      }
     
    });
    if(keepGoing){
      this.filters.push(filterObj);
    }
    this.filters.forEach(obj => {
      this.mainData.forEach(element => {
          if(element[obj.key] == obj.value){
            res.push(element);
          }
      });
    })

    resObj.data = res;
    resObj.filters = this.filters
    this.filterDataService.next(resObj);

    
    //this.usersDataService.next(this.sampleData);
  }
}
