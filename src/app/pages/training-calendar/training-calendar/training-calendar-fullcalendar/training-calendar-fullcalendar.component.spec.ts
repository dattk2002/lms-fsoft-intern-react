import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingCalendarFullcalendarComponent } from './training-calendar-fullcalendar.component';

describe('TrainingCalendarFullcalendarComponent', () => {
  let component: TrainingCalendarFullcalendarComponent;
  let fixture: ComponentFixture<TrainingCalendarFullcalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingCalendarFullcalendarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainingCalendarFullcalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
