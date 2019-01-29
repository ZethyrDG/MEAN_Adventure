import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dataroom2Component } from './dataroom2.component';

describe('Dataroom2Component', () => {
  let component: Dataroom2Component;
  let fixture: ComponentFixture<Dataroom2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dataroom2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dataroom2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
