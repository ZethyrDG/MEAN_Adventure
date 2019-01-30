import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurpleairpuzzleComponent } from './purpleairpuzzle.component';

describe('PurpleairpuzzleComponent', () => {
  let component: PurpleairpuzzleComponent;
  let fixture: ComponentFixture<PurpleairpuzzleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurpleairpuzzleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurpleairpuzzleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
