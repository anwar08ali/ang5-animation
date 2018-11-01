import { Injectable } from '@angular/core';
import "rxjs/Rx";
import { Subject } from 'rxjs/Subject';

export class UsersService {
  usersDataService = new Subject();
  sampleFilterData = [{
    firstname: "John",
    lastname: "Doe7686786",
    email: "john@example.com"
  },
  {
    firstname: "Mary",
    lastname: "Moe",
    email: "mary@example.com"
  },
  {
    firstname: "July",
    lastname: "Dooley",
    email: "july@example.com"
  }
    ]
  update(){
    this.usersDataService.next(this.sampleFilterData);
  }
}
