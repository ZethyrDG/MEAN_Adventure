import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurplesandpuzzleComponent } from './purplesandpuzzle.component';

describe('PurplesandpuzzleComponent', () => {
  let component: PurplesandpuzzleComponent;
  let fixture: ComponentFixture<PurplesandpuzzleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurplesandpuzzleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurplesandpuzzleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
