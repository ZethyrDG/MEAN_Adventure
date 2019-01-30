import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurplefireComponent } from './purplefire.component';

describe('PurplefireComponent', () => {
  let component: PurplefireComponent;
  let fixture: ComponentFixture<PurplefireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurplefireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurplefireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
