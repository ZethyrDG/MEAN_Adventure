import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedpassageComponent } from './redpassage.component';

describe('RedpassageComponent', () => {
  let component: RedpassageComponent;
  let fixture: ComponentFixture<RedpassageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedpassageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedpassageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
