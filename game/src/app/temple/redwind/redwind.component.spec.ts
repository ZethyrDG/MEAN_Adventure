import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedwindComponent } from './redwind.component';

describe('RedwindComponent', () => {
  let component: RedwindComponent;
  let fixture: ComponentFixture<RedwindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedwindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedwindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
