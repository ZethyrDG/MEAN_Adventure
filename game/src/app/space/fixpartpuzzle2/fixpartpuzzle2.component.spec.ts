import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fixpartpuzzle2Component } from './fixpartpuzzle2.component';

describe('Fixpartpuzzle2Component', () => {
  let component: Fixpartpuzzle2Component;
  let fixture: ComponentFixture<Fixpartpuzzle2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fixpartpuzzle2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fixpartpuzzle2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
