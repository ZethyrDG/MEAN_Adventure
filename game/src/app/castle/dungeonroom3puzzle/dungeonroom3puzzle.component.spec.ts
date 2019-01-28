import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dungeonroom3puzzleComponent } from './dungeonroom3puzzle.component';

describe('Dungeonroom3puzzleComponent', () => {
  let component: Dungeonroom3puzzleComponent;
  let fixture: ComponentFixture<Dungeonroom3puzzleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dungeonroom3puzzleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dungeonroom3puzzleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
