import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabguardianpuzzleComponent } from './labguardianpuzzle.component';

describe('LabguardianpuzzleComponent', () => {
  let component: LabguardianpuzzleComponent;
  let fixture: ComponentFixture<LabguardianpuzzleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabguardianpuzzleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabguardianpuzzleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
