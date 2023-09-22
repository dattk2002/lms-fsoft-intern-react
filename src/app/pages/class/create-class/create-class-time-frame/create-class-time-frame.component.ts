import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-create-class-time-frame',
  templateUrl: './create-class-time-frame.component.html',
  styleUrls: ['./create-class-time-frame.component.scss'],
})
export class CreateClassTimeFrameComponent {
  time_frame_form: FormGroup;
  @Input()
  selectedDates!: any[];
  @Input()
  viewMode: string = null;

  // hightlightedDate(date: any): boolean {
  //   this.selectedDates.forEach((selectedDay) => {
  //     let formated = new Date(selectedDay);
  //     if (formated.getFullYear() == date.year) {
  //       if (formated.getMonth() == date.month) {
  //         if (formated.getDay() == date.day) {
  //           return true;
  //         }
  //       }
  //     }
  //     return false;
  //   });
  // }
  constructor(private fb: FormBuilder) {}
  Dates(days: any[]): any[] {
    let result = [];
    days.forEach((day) => {
      result.push(new Date(day).getDate());
    });
    return result;
  }
  Months(days: any[]): any[] {
    let result = [];
    days.forEach((day) => {
      result.push(new Date(day).getMonth());
    });
    return result;
  }
  ngOnInit() {
    this.time_frame_form = new FormGroup({
      timeFrame: new FormGroup({
        multipleMonths: new FormControl([]),
      }),
    });
  }

  onSubmit() {
    const timeFrameValue = this.time_frame_form.get('timeFrame').value;

    //tranform to the valid JSON format
    const startDate = timeFrameValue.multipleMonths[0];
    const endDate =
      timeFrameValue.multipleMonths[timeFrameValue.multipleMonths.length - 1];
    const highlightedDates = timeFrameValue.multipleMonths;

    const timeFrame = {
      start_date: startDate,
      end_date: endDate,
      highlighted_dates: highlightedDates,
    };

    const formValue = {
      time_frame: timeFrame,
    };

    console.log('Time fram summitted');
    console.log(JSON.stringify(formValue));
    localStorage.setItem('time_frameRequest', JSON.stringify(formValue));
  }
}
