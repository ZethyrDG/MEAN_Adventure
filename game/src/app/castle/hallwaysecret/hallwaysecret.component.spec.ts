import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HallwaysecretComponent } from './hallwaysecret.component';

describe('HallwaysecretComponent', () => {
  let component: HallwaysecretComponent;
  let fixture: ComponentFixture<HallwaysecretComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HallwaysecretComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HallwaysecretComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
