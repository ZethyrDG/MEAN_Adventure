import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabcombinepuzzleComponent } from './labcombinepuzzle.component';

describe('LabcombinepuzzleComponent', () => {
  let component: LabcombinepuzzleComponent;
  let fixture: ComponentFixture<LabcombinepuzzleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabcombinepuzzleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabcombinepuzzleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
