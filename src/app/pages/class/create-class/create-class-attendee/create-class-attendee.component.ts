import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-create-class-attendee',
  templateUrl: './create-class-attendee.component.html',
  styleUrls: ['./create-class-attendee.component.scss'],
})
export class CreateClassAttendeeComponent {
  attendeesForm!: FormGroup;
  @Input()
  viewMode: string = null;

  @Input()
  attendeeInformation!: any;
  
  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.attendeesForm = this.fb.group({
      attendees: this.fb.group({
        planned_number: [0],
        accepted_number: [0],
        actual_number: [0],
      }),
    });
  }
  onSubmit() {
    console.log('Attendee submitted');
    console.log(JSON.stringify(this.attendeesForm.value));
    localStorage.setItem(
      'attendeesRequest',
      JSON.stringify(this.attendeesForm.value)
    );
  }
}
