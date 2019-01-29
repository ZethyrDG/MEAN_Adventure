import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Navigationroom3Component } from './navigationroom3.component';

describe('Navigationroom3Component', () => {
  let component: Navigationroom3Component;
  let fixture: ComponentFixture<Navigationroom3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Navigationroom3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Navigationroom3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
