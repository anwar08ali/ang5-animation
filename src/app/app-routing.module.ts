import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { DashboardComponent } from './dashboard/dashboard.component';
import { MyAnimationComponent } from './my-animation/my-animation.component';
import { AnimationSmallToLargeComponent } from './my-animation/animation-types/animation-small-to-large/animation-small-to-large.component';
import { AnimationKeyframesComponent } from './my-animation/animation-types/animation-keyframes/animation-keyframes.component';
import { AnimationSlideshowComponent } from './my-animation/animation-types/animation-slideshow/animation-slideshow.component';
import { AnimationSlideinoutComponent } from './my-animation/animation-types/animation-slideinout/animation-slideinout.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'users/:userid', component: UsersComponent },
  
  { path: 'animations', component: MyAnimationComponent,
    children: [
      { path: '', redirectTo: "smtolarge", pathMatch: "full"},
      { path: 'smtolarge', component: AnimationSmallToLargeComponent} ,
      { path: 'keyframes', component: AnimationKeyframesComponent},
      { path: 'slideshow', component: AnimationSlideshowComponent} ,
      { path: 'slideInOut', component: AnimationSlideinoutComponent} 
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
