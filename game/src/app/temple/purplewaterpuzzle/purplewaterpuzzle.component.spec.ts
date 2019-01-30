import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurplewaterpuzzleComponent } from './purplewaterpuzzle.component';

describe('PurplewaterpuzzleComponent', () => {
  let component: PurplewaterpuzzleComponent;
  let fixture: ComponentFixture<PurplewaterpuzzleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurplewaterpuzzleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurplewaterpuzzleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
