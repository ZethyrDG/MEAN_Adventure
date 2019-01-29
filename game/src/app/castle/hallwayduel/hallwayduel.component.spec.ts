import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HallwayduelComponent } from './hallwayduel.component';

describe('HallwayduelComponent', () => {
  let component: HallwayduelComponent;
  let fixture: ComponentFixture<HallwayduelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HallwayduelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HallwayduelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
