import { Component, OnInit } from '@angular/core';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';

@Component({
  selector: 'app-animation-keyframes',
  templateUrl: './animation-keyframes.component.html',
  styleUrls: ['./animation-keyframes.component.css'],
  animations: [
    trigger('myAnimation',[
      state('transitionOne', style({
        backgroundColor: '#757575'
      })),
      state('transitionTwo', style({
        backgroundColor: 'green'
        
      })),
      transition('transitionOne <=> transitionTwo', animate('300ms ease-in', keyframes([
        style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
        style({opacity: 1, transform: 'translateY(35px)',  offset: 0.5}),
        style({opacity: 1, transform: 'translateY(0)',     offset: 1.0})
      ])))
    ])
  ]
})
export class AnimationKeyframesComponent implements OnInit {
  state: string = 'transitionOne';
  constructor() { }

  ngOnInit() {
  }
  animate(){
    this.state = this.state === 'transitionOne'? this.state = 'transitionTwo' : 'transitionOne';
  }
}
