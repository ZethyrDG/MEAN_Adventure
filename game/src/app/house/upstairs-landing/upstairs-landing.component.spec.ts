import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpstairsLandingComponent } from './upstairs-landing.component';

describe('UpstairsLandingComponent', () => {
  let component: UpstairsLandingComponent;
  let fixture: ComponentFixture<UpstairsLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpstairsLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpstairsLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
