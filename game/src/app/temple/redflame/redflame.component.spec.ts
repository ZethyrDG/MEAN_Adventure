import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedflameComponent } from './redflame.component';

describe('RedflameComponent', () => {
  let component: RedflameComponent;
  let fixture: ComponentFixture<RedflameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedflameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedflameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
