import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BluebridgeComponent } from './bluebridge.component';

describe('BluebridgeComponent', () => {
  let component: BluebridgeComponent;
  let fixture: ComponentFixture<BluebridgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BluebridgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BluebridgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
