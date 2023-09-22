import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingCalendarByWeekComponent } from './training-calendar-by-week.component';

describe('TrainingCalendarByWeekComponent', () => {
  let component: TrainingCalendarByWeekComponent;
  let fixture: ComponentFixture<TrainingCalendarByWeekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingCalendarByWeekComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainingCalendarByWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
