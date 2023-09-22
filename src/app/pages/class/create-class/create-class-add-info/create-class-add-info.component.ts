import { Router } from '@angular/router';
import { JoyrideService } from 'ngx-joyride';
import { Component, Input } from '@angular/core';
import { CreateClassService } from '../../services/create-class/create-class.service';

@Component({
  selector: 'app-create-class-add-info',
  templateUrl: './create-class-add-info.component.html',
  styleUrls: ['./create-class-add-info.component.scss'],
})
export class CreateClassAddInfoComponent {
  requestString: string = '';
  tmp = localStorage.getItem('className');
  className = this.tmp.substring(1, this.tmp.length - 1);

  // Tolltip
  displayModal: boolean = localStorage.getItem('viewed-tooltip') ? false : true;
  hideForever: boolean = false;

  // ClassDetail view
  @Input()
  viewMode: string = null;

  @Input()
  generalInformation: any;
  constructor(
    private joyride: JoyrideService,
    private router: Router,
    private createClassService: CreateClassService
  ) {}

  addToRequest(componentRequest: string) {
    this.requestString += componentRequest;
    console.log('requestString: ' + this.requestString);
  }

  sendSumRequest() {
    let generalRequest = localStorage.getItem('generalRequest');
    let time_frameRequest = localStorage.getItem('time_frameRequest');
    let attendeesRequest = localStorage.getItem('attendeesRequest');

    let sumRequest = null;
    if (
      generalRequest === null ||
      time_frameRequest === null ||
      attendeesRequest === null
    ) {
      alert('Please fill all field!');
    } else {
      sumRequest =
        '{' +
        generalRequest.substring(1, generalRequest.length - 1) +
        ',' +
        time_frameRequest.substring(1, time_frameRequest.length - 1) +
        ',' +
        attendeesRequest.substring(1, attendeesRequest.length - 1) +
        '}';
      console.log('Sum request');
      console.log(sumRequest);
      this.router.navigate(['/class/create/add-trainer']);
    }
  }

  sendForm() {
    let generalRequest = localStorage.getItem('generalRequest');
    let time_frameRequest = localStorage.getItem('time_frameRequest');
    let attendeesRequest = localStorage.getItem('attendeesRequest');
    let tmp = localStorage.getItem('className');
    let className = tmp.substring(1, tmp.length - 1);
    let trainingId = localStorage.getItem('createClassTrainingProgramId');
    let sumRequest = null;
    if (
      generalRequest === null ||
      time_frameRequest === null ||
      attendeesRequest === null
    ) {
      alert('Please fill all field!');
    } else {
      sumRequest =
        '{' +
        generalRequest.substring(1, generalRequest.length - 1) +
        ',' +
        time_frameRequest.substring(1, time_frameRequest.length - 1) +
        ',' +
        attendeesRequest.substring(1, attendeesRequest.length - 1) +
        ',"training_programs": {"program_id":' +
        trainingId +
        '},' +
        '"class_name":' +
        className +
        ', "class_code":' +
        '"STH"' +
        ', "class_status":' +
        '"active"' +
        '}';
      console.log('Sum request');
      console.log(sumRequest);
      // call service
      this.createClassService.createClass(sumRequest).subscribe(
        (response) => {
          console.log('Create class SUCCESS');
          console.log(response);
        },
        (err) => {
          console.log('Create class FAIL');
          console.log(err);
        }
      );
    }
  }

  tour() {
    this.joyride.startTour({
      steps: ['firstStep', 'secondStep', 'thirdStep', 'fourthStep'],
    });
  }
  hideModel() {
    this.tour();
    this.displayModal = false;
  }
  hideForeverTooltip() {
    if (this.hideForever) {
      localStorage.setItem('viewed-tooltip', 'true');
    }
  }
}
