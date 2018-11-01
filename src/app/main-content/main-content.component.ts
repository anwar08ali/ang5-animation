import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/users.service';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css'],
  animations: [
    trigger('myAnimation',[
      state('small', style({
        // transform: `scale(1)`
        backgroundColor: '#757575'
      })),
      state('large', style({
        // transform: `scale(1.2)`
        backgroundColor: 'green'
        
      })),
      transition('small <=> large', animate('300ms ease-in', keyframes([
        style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
        style({opacity: 1, transform: 'translateY(35px)',  offset: 0.5}),
        style({opacity: 1, transform: 'translateY(0)',     offset: 1.0})
      ])))
    ])
  ]
})
export class MainContentComponent implements OnInit {
  userDetails = [{
    firstname: "John",
    lastname: "Doe",
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
  }] ;
  state: string = 'small';

  constructor(private usersService: UsersService) { 
    this.usersService.usersDataService.subscribe((data:[{firstname:string,lastname:string,email: string}])=>{
      this.userDetails = data;
    })
  }

  ngOnInit() {
    
  }
  animate(){
    this.state = this.state === 'small'? this.state = 'large' : 'small';
  }
}
