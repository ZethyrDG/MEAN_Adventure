import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBedroomComponent } from './my-bedroom.component';

describe('MyBedroomComponent', () => {
  let component: MyBedroomComponent;
  let fixture: ComponentFixture<MyBedroomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyBedroomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyBedroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
