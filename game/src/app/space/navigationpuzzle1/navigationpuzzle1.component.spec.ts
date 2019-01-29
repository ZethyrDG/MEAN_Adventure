import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Navigationpuzzle1Component } from './navigationpuzzle1.component';

describe('Navigationpuzzle1Component', () => {
  let component: Navigationpuzzle1Component;
  let fixture: ComponentFixture<Navigationpuzzle1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Navigationpuzzle1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Navigationpuzzle1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
