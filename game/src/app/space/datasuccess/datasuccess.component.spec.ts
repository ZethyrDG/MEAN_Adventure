import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatasuccessComponent } from './datasuccess.component';

describe('DatasuccessComponent', () => {
  let component: DatasuccessComponent;
  let fixture: ComponentFixture<DatasuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatasuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatasuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
