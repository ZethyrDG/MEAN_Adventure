import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HallwaywandComponent } from './hallwaywand.component';

describe('HallwaywandComponent', () => {
  let component: HallwaywandComponent;
  let fixture: ComponentFixture<HallwaywandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HallwaywandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HallwaywandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
