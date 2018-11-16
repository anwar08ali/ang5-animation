import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animation-left-panel',
  templateUrl: './animation-left-panel.component.html',
  styleUrls: ['./animation-left-panel.component.css']
})
export class AnimationLeftPanelComponent implements OnInit {
  smallToLarge:string = 'Small <=> large';
  constructor() { }

  ngOnInit() {
  }

}
