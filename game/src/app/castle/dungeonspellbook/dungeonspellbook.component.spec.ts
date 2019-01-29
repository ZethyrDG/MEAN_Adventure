import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DungeonspellbookComponent } from './dungeonspellbook.component';

describe('DungeonspellbookComponent', () => {
  let component: DungeonspellbookComponent;
  let fixture: ComponentFixture<DungeonspellbookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DungeonspellbookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DungeonspellbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
