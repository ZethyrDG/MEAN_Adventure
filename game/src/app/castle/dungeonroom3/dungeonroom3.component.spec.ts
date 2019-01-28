import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dungeonroom3Component } from './dungeonroom3.component';

describe('Dungeonroom3Component', () => {
  let component: Dungeonroom3Component;
  let fixture: ComponentFixture<Dungeonroom3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dungeonroom3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dungeonroom3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
