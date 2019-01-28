import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabbookpuzzleComponent } from './labbookpuzzle.component';

describe('LabbookpuzzleComponent', () => {
  let component: LabbookpuzzleComponent;
  let fixture: ComponentFixture<LabbookpuzzleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabbookpuzzleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabbookpuzzleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
