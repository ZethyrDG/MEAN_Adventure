import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dungeonroom1Component } from './dungeonroom1.component';

describe('Dungeonroom1Component', () => {
  let component: Dungeonroom1Component;
  let fixture: ComponentFixture<Dungeonroom1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dungeonroom1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dungeonroom1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
