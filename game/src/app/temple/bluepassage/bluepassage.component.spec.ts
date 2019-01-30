import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BluepassageComponent } from './bluepassage.component';

describe('BluepassageComponent', () => {
  let component: BluepassageComponent;
  let fixture: ComponentFixture<BluepassageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BluepassageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BluepassageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
