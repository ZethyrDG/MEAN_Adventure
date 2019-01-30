import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurplesandComponent } from './purplesand.component';

describe('PurplesandComponent', () => {
  let component: PurplesandComponent;
  let fixture: ComponentFixture<PurplesandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurplesandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurplesandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
