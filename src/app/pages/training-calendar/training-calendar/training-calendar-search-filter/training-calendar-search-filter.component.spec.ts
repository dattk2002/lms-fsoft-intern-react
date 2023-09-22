import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingCalendarSearchFilterComponent } from './training-calendar-search-filter.component';

describe('TrainingCalendarSearchFilterComponent', () => {
  let component: TrainingCalendarSearchFilterComponent;
  let fixture: ComponentFixture<TrainingCalendarSearchFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingCalendarSearchFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainingCalendarSearchFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
