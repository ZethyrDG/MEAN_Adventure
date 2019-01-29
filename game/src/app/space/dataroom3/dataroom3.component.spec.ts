import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dataroom3Component } from './dataroom3.component';

describe('Dataroom3Component', () => {
  let component: Dataroom3Component;
  let fixture: ComponentFixture<Dataroom3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dataroom3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dataroom3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
