import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnginerepairedComponent } from './enginerepaired.component';

describe('EnginerepairedComponent', () => {
  let component: EnginerepairedComponent;
  let fixture: ComponentFixture<EnginerepairedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnginerepairedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnginerepairedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
