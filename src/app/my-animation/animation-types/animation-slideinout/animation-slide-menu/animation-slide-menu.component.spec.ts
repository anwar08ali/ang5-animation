import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationSlideMenuComponent } from './animation-slide-menu.component';

describe('AnimationSlideMenuComponent', () => {
  let component: AnimationSlideMenuComponent;
  let fixture: ComponentFixture<AnimationSlideMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimationSlideMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimationSlideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
