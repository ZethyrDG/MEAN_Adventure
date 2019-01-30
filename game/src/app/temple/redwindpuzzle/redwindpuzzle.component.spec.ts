import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedwindpuzzleComponent } from './redwindpuzzle.component';

describe('RedwindpuzzleComponent', () => {
  let component: RedwindpuzzleComponent;
  let fixture: ComponentFixture<RedwindpuzzleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedwindpuzzleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedwindpuzzleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
