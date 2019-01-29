import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Navigationpuzzle2Component } from './navigationpuzzle2.component';

describe('Navigationpuzzle2Component', () => {
  let component: Navigationpuzzle2Component;
  let fixture: ComponentFixture<Navigationpuzzle2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Navigationpuzzle2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Navigationpuzzle2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
