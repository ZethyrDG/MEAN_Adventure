import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dungeonroom2puzzleComponent } from './dungeonroom2puzzle.component';

describe('Dungeonroom2puzzleComponent', () => {
  let component: Dungeonroom2puzzleComponent;
  let fixture: ComponentFixture<Dungeonroom2puzzleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dungeonroom2puzzleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dungeonroom2puzzleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
