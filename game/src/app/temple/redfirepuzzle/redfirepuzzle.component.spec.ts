import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedfirepuzzleComponent } from './redfirepuzzle.component';

describe('RedfirepuzzleComponent', () => {
  let component: RedfirepuzzleComponent;
  let fixture: ComponentFixture<RedfirepuzzleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedfirepuzzleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedfirepuzzleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
