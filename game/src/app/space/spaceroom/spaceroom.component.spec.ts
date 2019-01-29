import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceroomComponent } from './spaceroom.component';

describe('SpaceroomComponent', () => {
  let component: SpaceroomComponent;
  let fixture: ComponentFixture<SpaceroomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpaceroomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
