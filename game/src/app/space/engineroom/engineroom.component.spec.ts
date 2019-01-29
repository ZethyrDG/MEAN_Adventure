import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineroomComponent } from './engineroom.component';

describe('EngineroomComponent', () => {
  let component: EngineroomComponent;
  let fixture: ComponentFixture<EngineroomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngineroomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EngineroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
