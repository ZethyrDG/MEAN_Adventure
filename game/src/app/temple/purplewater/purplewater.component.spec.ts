import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurplewaterComponent } from './purplewater.component';

describe('PurplewaterComponent', () => {
  let component: PurplewaterComponent;
  let fixture: ComponentFixture<PurplewaterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurplewaterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurplewaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
