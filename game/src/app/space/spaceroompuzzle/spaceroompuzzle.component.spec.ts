import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceroompuzzleComponent } from './spaceroompuzzle.component';

describe('SpaceroompuzzleComponent', () => {
  let component: SpaceroompuzzleComponent;
  let fixture: ComponentFixture<SpaceroompuzzleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpaceroompuzzleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceroompuzzleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
