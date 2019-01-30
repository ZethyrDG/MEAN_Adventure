import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YouwinComponent } from './youwin.component';

describe('YouwinComponent', () => {
  let component: YouwinComponent;
  let fixture: ComponentFixture<YouwinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YouwinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YouwinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
