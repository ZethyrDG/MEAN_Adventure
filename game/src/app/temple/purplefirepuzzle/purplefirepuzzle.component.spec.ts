import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurplefirepuzzleComponent } from './purplefirepuzzle.component';

describe('PurplefirepuzzleComponent', () => {
  let component: PurplefirepuzzleComponent;
  let fixture: ComponentFixture<PurplefirepuzzleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurplefirepuzzleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurplefirepuzzleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
