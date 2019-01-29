import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dataroom1Component } from './dataroom1.component';

describe('Dataroom1Component', () => {
  let component: Dataroom1Component;
  let fixture: ComponentFixture<Dataroom1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dataroom1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dataroom1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
