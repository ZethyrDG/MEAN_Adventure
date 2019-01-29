import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationsuccessComponent } from './navigationsuccess.component';

describe('NavigationsuccessComponent', () => {
  let component: NavigationsuccessComponent;
  let fixture: ComponentFixture<NavigationsuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationsuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationsuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
