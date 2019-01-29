import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fixpartpuzzle3Component } from './fixpartpuzzle3.component';

describe('Fixpartpuzzle3Component', () => {
  let component: Fixpartpuzzle3Component;
  let fixture: ComponentFixture<Fixpartpuzzle3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fixpartpuzzle3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fixpartpuzzle3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
