import { Component, Input, ViewChild } from '@angular/core';
import { CreatSyllabusGeneralComponent } from './creat-syllabus-general/creat-syllabus-general.component';
import { CreateSyllabusOutlineComponent } from './create-syllabus-outline/create-syllabus-outline.component';
import { CreateSyllabusOthersComponent } from './create-syllabus-others/create-syllabus-others.component';
import { CreateSyllabusService } from './services/create-syllabus.service';
@Component({
  selector: 'app-create-syllabus',
  templateUrl: './create-syllabus.component.html',
  styleUrls: ['./create-syllabus.component.scss'],
})
export class CreateSyllabusComponent {
  constructor(private getSyllabusService: CreateSyllabusService) {}
  @ViewChild(CreatSyllabusGeneralComponent)
  general!: CreatSyllabusGeneralComponent;
  @ViewChild(CreateSyllabusOutlineComponent)
  outline!: CreateSyllabusOutlineComponent;
  @ViewChild(CreateSyllabusOthersComponent)
  others!: CreateSyllabusOthersComponent;
  requestString = '';
  requestJson: any;
  @Input()
  editSyllabus: any;
  onSubmit() {
    console.log(
      this.general.onSubmit(),
      this.outline.onSubmit(),
      this.others.onSubmit(),
      this.getaddSyllabus()
    );
    this.requestString =
      '{' +
      '"syllabusName": "' +
      this.general.onSubmit().syllabusName +
      '",' +
      '"code":"STH",' +
      '"status": "string",' +
      '"durations": {  "totalDate": 0,  "totalHours": 0}' +
      ', "general": ' +
      JSON.stringify(this.general.onSubmit()) +
      ', "outline":' +
      JSON.stringify(this.outline.onSubmit()) +
      ', "others":' +
      JSON.stringify(this.others.onSubmit()) +
      '}';
    console.log('requestString');
    console.log(this.requestString);
this.requestJson = JSON.parse(this.requestString)
    console.log(JSON.parse(this.requestString));
  }
  getaddSyllabus() {
    this.getSyllabusService
      .getaddSyllabus(this.requestJson)
      .subscribe(
        (data) => {
          console.log('Success');
          console.log(data);
          console.log(JSON.stringify(data));
        },
        (error) => {
          console.log('Fail');
        }
      );
  }
}
