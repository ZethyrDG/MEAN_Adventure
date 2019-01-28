import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dungeonroom1puzzleComponent } from './dungeonroom1puzzle.component';

describe('Dungeonroom1puzzleComponent', () => {
  let component: Dungeonroom1puzzleComponent;
  let fixture: ComponentFixture<Dungeonroom1puzzleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dungeonroom1puzzleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dungeonroom1puzzleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
