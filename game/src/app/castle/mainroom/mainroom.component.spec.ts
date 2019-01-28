import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainroomComponent } from './mainroom.component';

describe('MainroomComponent', () => {
  let component: MainroomComponent;
  let fixture: ComponentFixture<MainroomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainroomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
