import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BluebridgepuzzleComponent } from './bluebridgepuzzle.component';

describe('BluebridgepuzzleComponent', () => {
  let component: BluebridgepuzzleComponent;
  let fixture: ComponentFixture<BluebridgepuzzleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BluebridgepuzzleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BluebridgepuzzleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
