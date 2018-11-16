import { Component, OnInit } from '@angular/core';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';

@Component({
  selector: 'app-animation-small-to-large',
  templateUrl: './animation-small-to-large.component.html',
  styleUrls: ['./animation-small-to-large.component.css'],
  animations: [
    trigger('myAnimation',[
      state('small', style({
        transform: `scale(1)`
        //backgroundColor: '#757575'
      })),
      state('large', style({
        transform: `scale(1.2)`
        //backgroundColor: 'green'
        
      })),
      transition('small <=> large', animate('300ms ease-in'))
    ])
  ]
})
export class AnimationSmallToLargeComponent implements OnInit {
  state: string = 'small';
  constructor() { }

  ngOnInit() {
  }
  animate(){
    this.state = this.state === 'small'? this.state = 'large' : 'small';
  }
}
