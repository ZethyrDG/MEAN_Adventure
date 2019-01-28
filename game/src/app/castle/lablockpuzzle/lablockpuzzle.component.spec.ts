import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LablockpuzzleComponent } from './lablockpuzzle.component';

describe('LablockpuzzleComponent', () => {
  let component: LablockpuzzleComponent;
  let fixture: ComponentFixture<LablockpuzzleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LablockpuzzleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LablockpuzzleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
