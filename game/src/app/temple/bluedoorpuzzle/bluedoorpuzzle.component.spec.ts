import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BluedoorpuzzleComponent } from './bluedoorpuzzle.component';

describe('BluedoorpuzzleComponent', () => {
  let component: BluedoorpuzzleComponent;
  let fixture: ComponentFixture<BluedoorpuzzleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BluedoorpuzzleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BluedoorpuzzleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
