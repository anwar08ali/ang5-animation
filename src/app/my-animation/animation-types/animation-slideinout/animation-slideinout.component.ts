import { Component, OnInit } from '@angular/core';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';

@Component({
  selector: 'app-animation-slideinout',
  templateUrl: './animation-slideinout.component.html',
  styleUrls: ['./animation-slideinout.component.css'],
  animations: [
    // trigger('slideInOut',[
    //   transition(':enter',[
    //     style({opacity: 1, transform: 'translateX(50%)', offset: 0,overflowX: 'hidden',
    //     overflowY: 'auto'}),
    //     animate('200ms ease-in', style({transform: 'translateX(0%)'}))
    //   ]),
    //   transition(':leave', [
    //     animate('200ms ease-in', style({opacity: 0, transform: 'translateX(50%)', offset: 0,overflowX: 'hidden',
    //     overflowY: 'auto'}))
    //   ])
    // ])
    trigger('slideInOut', [
      state('in', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(100%, 0, 0)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ]
})
export class AnimationSlideinoutComponent implements OnInit {
  // isSlideVisible: boolean = false;
  menuState:string = 'out';
  constructor() { }

  ngOnInit() {
  }
  // toggleSlide(){
  //   this.isSlideVisible = !this.isSlideVisible;
  // }
  toggleMenu() {
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
  }
}
