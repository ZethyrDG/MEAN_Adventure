import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlueflameComponent } from './blueflame.component';

describe('BlueflameComponent', () => {
  let component: BlueflameComponent;
  let fixture: ComponentFixture<BlueflameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlueflameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlueflameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
