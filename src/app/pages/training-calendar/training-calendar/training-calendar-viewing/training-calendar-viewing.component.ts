import { Component } from '@angular/core';

@Component({
  selector: 'app-training-calendar-viewing',
  templateUrl: './training-calendar-viewing.component.html',
  styleUrls: ['./training-calendar-viewing.component.scss'],
})
export class TrainingCalendarViewingComponent {
  date: Date[];
  minDate = new Date('01/01/2023');
  maxDate = new Date('12/31/2023');

  selectDateRange(event: any) {
    console.log(event);
  }
}
