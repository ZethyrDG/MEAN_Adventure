import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontRoomComponent } from './front-room.component';

describe('FrontRoomComponent', () => {
  let component: FrontRoomComponent;
  let fixture: ComponentFixture<FrontRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
