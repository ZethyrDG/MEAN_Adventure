import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Datapuzzle3Component } from './datapuzzle3.component';

describe('Datapuzzle3Component', () => {
  let component: Datapuzzle3Component;
  let fixture: ComponentFixture<Datapuzzle3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Datapuzzle3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Datapuzzle3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
