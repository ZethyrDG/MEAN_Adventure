import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempleentranceComponent } from './templeentrance.component';

describe('TempleentranceComponent', () => {
  let component: TempleentranceComponent;
  let fixture: ComponentFixture<TempleentranceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempleentranceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempleentranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
