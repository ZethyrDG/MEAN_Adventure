import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrancepuzzleComponent } from './entrancepuzzle.component';

describe('EntrancepuzzleComponent', () => {
  let component: EntrancepuzzleComponent;
  let fixture: ComponentFixture<EntrancepuzzleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntrancepuzzleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrancepuzzleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
