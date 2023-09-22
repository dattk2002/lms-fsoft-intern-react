import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingCalendarViewingWeekComponent } from './training-calendar-viewing-week.component';

describe('TrainingCalendarViewingWeekComponent', () => {
  let component: TrainingCalendarViewingWeekComponent;
  let fixture: ComponentFixture<TrainingCalendarViewingWeekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingCalendarViewingWeekComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainingCalendarViewingWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
