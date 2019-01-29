import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dungeonroom2Component } from './dungeonroom2.component';

describe('Dungeonroom2Component', () => {
  let component: Dungeonroom2Component;
  let fixture: ComponentFixture<Dungeonroom2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dungeonroom2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dungeonroom2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
