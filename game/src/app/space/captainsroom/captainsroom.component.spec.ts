import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptainsroomComponent } from './captainsroom.component';

describe('CaptainsroomComponent', () => {
  let component: CaptainsroomComponent;
  let fixture: ComponentFixture<CaptainsroomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaptainsroomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaptainsroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
