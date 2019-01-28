import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HallwaypuzzleComponent } from './hallwaypuzzle.component';

describe('HallwaypuzzleComponent', () => {
  let component: HallwaypuzzleComponent;
  let fixture: ComponentFixture<HallwaypuzzleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HallwaypuzzleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HallwaypuzzleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
