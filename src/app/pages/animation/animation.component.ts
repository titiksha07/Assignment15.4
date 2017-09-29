import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  group,
  keyframes
} from '@angular/core';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css'],
  animations: [
  trigger('myState', [
    state('active', style({
      backgroundColor: '#cfd8dc',
      transform:'scale(1.1)'
    })),
    state('inactive', style({
      backgroundColor: '#fff',
      transform: 'scale(1)'
    })),
    transition('inactive => active', animate('500ms ease-in')),
    transition('active => inactive', animate('500ms ease-out'))
  ]
    ),
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate(400)
      ]),
      transition(':leave', [
        style({ width: 10, transform: 'translateX(50px)', opacity: 0 }),
        group([
          animate('0.100s 0.1s ease', style({
            transform: 'translateX(0)',
            width: 120
          })),
          animate('0.3s ease', style({
            opacity: 1
          }))
        ])
      ])
    ])
  ]
})

export class AnimationComponent implements OnInit {
  animationState: string;
  constructor() { }

  ngOnInit() {
  }
/*click(){
  if(this.animationState==='active')
    {
      this.animationState='inactive'
    }
    else{
      this.animationState='active'
    }
}*/
  mouseEnter(){
    this.activeState();
  }
  mouseLeave(){
    this.inactiveState();
  }
  inactiveState(){
    this.animationState ='inactive';
  }
  activeState(){
    this.animationState ='active';
  }
animationStarted(e) {
    console.log('Animation Started', e)
  }
  
  animationDone(e) {
    console.log('Animation Done', e)
  }
}
