import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TowerpuzzleComponent } from './towerpuzzle.component';

describe('TowerpuzzleComponent', () => {
  let component: TowerpuzzleComponent;
  let fixture: ComponentFixture<TowerpuzzleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TowerpuzzleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TowerpuzzleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
