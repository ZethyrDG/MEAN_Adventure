import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Datapuzzle2Component } from './datapuzzle2.component';

describe('Datapuzzle2Component', () => {
  let component: Datapuzzle2Component;
  let fixture: ComponentFixture<Datapuzzle2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Datapuzzle2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Datapuzzle2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
