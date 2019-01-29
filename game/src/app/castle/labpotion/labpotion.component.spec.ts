import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabpotionComponent } from './labpotion.component';

describe('LabpotionComponent', () => {
  let component: LabpotionComponent;
  let fixture: ComponentFixture<LabpotionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabpotionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabpotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
