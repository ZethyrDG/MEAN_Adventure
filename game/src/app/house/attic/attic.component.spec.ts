import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtticComponent } from './attic.component';

describe('AtticComponent', () => {
  let component: AtticComponent;
  let fixture: ComponentFixture<AtticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
