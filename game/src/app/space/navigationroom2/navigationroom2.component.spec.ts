import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Navigationroom2Component } from './navigationroom2.component';

describe('Navigationroom2Component', () => {
  let component: Navigationroom2Component;
  let fixture: ComponentFixture<Navigationroom2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Navigationroom2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Navigationroom2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
