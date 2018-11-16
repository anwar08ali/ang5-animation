import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LeftSideBarComponent } from './left-side-bar/left-side-bar.component';
import { MainContentComponent } from './main-content/main-content.component';
import { UsersService } from './users.service';
import { FiltersService } from './filters.service';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyAnimationComponent } from './my-animation/my-animation.component';
import { AnimationLeftPanelComponent } from './my-animation/animation-left-panel/animation-left-panel.component';
import { AnimationMainPanelComponent } from './my-animation/animation-main-panel/animation-main-panel.component';
import { AnimationSmallToLargeComponent } from './my-animation/animation-types/animation-small-to-large/animation-small-to-large.component';
import { AnimationKeyframesComponent } from './my-animation/animation-types/animation-keyframes/animation-keyframes.component';
import { AnimationSlideshowComponent } from './my-animation/animation-types/animation-slideshow/animation-slideshow.component';
import { AnimationSlideinoutComponent } from './my-animation/animation-types/animation-slideinout/animation-slideinout.component';
import { AnimationSlideMenuComponent } from './my-animation/animation-types/animation-slideinout/animation-slide-menu/animation-slide-menu.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftSideBarComponent,
    MainContentComponent,
    DashboardComponent,
    MyAnimationComponent,
    AnimationLeftPanelComponent,
    AnimationMainPanelComponent,
    AnimationSmallToLargeComponent,
    AnimationKeyframesComponent,
    AnimationSlideshowComponent,
    AnimationSlideinoutComponent,
    AnimationSlideMenuComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [FiltersService,UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
