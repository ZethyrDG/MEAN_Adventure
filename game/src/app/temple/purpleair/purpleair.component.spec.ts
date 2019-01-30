import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurpleairComponent } from './purpleair.component';

describe('PurpleairComponent', () => {
  let component: PurpleairComponent;
  let fixture: ComponentFixture<PurpleairComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurpleairComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurpleairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
