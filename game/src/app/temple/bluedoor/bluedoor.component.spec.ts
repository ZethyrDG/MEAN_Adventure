import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BluedoorComponent } from './bluedoor.component';

describe('BluedoorComponent', () => {
  let component: BluedoorComponent;
  let fixture: ComponentFixture<BluedoorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BluedoorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BluedoorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
