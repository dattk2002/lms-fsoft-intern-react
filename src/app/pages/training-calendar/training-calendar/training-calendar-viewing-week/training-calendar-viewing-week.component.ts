import { Component } from '@angular/core';

@Component({
  selector: 'app-training-calendar-viewing-week',
  templateUrl: './training-calendar-viewing-week.component.html',
  styleUrls: ['./training-calendar-viewing-week.component.scss']
})
export class TrainingCalendarViewingWeekComponent {
  date: Date[];
  minDate = new Date('01/01/2023');
  maxDate = new Date('12/31/2023');

  selectDateRange(event: any) {
    console.log(event);
  }
}
