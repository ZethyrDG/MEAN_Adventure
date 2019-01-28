import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HallwayescapeComponent } from './hallwayescape.component';

describe('HallwayescapeComponent', () => {
  let component: HallwayescapeComponent;
  let fixture: ComponentFixture<HallwayescapeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HallwayescapeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HallwayescapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
