import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Datapuzzle1Component } from './datapuzzle1.component';

describe('Datapuzzle1Component', () => {
  let component: Datapuzzle1Component;
  let fixture: ComponentFixture<Datapuzzle1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Datapuzzle1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Datapuzzle1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
