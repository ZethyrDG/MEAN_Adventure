import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Navigationpuzzle3Component } from './navigationpuzzle3.component';

describe('Navigationpuzzle3Component', () => {
  let component: Navigationpuzzle3Component;
  let fixture: ComponentFixture<Navigationpuzzle3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Navigationpuzzle3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Navigationpuzzle3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
