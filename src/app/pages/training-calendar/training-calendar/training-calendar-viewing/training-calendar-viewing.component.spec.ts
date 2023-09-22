import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingCalendarViewingComponent } from './training-calendar-viewing.component';

describe('TrainingCalendarViewingComponent', () => {
  let component: TrainingCalendarViewingComponent;
  let fixture: ComponentFixture<TrainingCalendarViewingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingCalendarViewingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainingCalendarViewingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
