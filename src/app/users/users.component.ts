import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  id: string = ''
  user: {};
  defaultImagePath = "../assets/avatar.jpg"; 
  constructor(private route: ActivatedRoute,private usersService: UsersService) { 
    this.route.params.subscribe( params => {
      this.id = params.userid
    });
  }

  ngOnInit() {
    this.getUserDetails();
    
  }
  getUserDetails(){
    if(this.usersService.getUser(this.id)){
      this.user = this.usersService.getUser(this.id);
    }else{
      this.user = null;
    }
  }
}
