import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HallwayescapepuzzleComponent } from './hallwayescapepuzzle.component';

describe('HallwayescapepuzzleComponent', () => {
  let component: HallwayescapepuzzleComponent;
  let fixture: ComponentFixture<HallwayescapepuzzleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HallwayescapepuzzleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HallwayescapepuzzleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
