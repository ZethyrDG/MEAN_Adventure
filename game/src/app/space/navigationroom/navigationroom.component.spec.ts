import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationroomComponent } from './navigationroom.component';

describe('NavigationroomComponent', () => {
  let component: NavigationroomComponent;
  let fixture: ComponentFixture<NavigationroomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationroomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
