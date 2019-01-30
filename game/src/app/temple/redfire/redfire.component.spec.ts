import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedfireComponent } from './redfire.component';

describe('RedfireComponent', () => {
  let component: RedfireComponent;
  let fixture: ComponentFixture<RedfireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedfireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedfireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
