import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurplepassageComponent } from './purplepassage.component';

describe('PurplepassageComponent', () => {
  let component: PurplepassageComponent;
  let fixture: ComponentFixture<PurplepassageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurplepassageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurplepassageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
