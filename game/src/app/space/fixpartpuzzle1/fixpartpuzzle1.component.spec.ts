import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fixpartpuzzle1Component } from './fixpartpuzzle1.component';

describe('Fixpartpuzzle1Component', () => {
  let component: Fixpartpuzzle1Component;
  let fixture: ComponentFixture<Fixpartpuzzle1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fixpartpuzzle1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fixpartpuzzle1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
