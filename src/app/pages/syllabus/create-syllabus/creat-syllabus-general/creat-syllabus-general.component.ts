import { Component } from '@angular/core';
import {MenuItem} from 'primeng/api';
import {SelectItem} from 'primeng/api';
import {SelectItemGroup} from 'primeng/api';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';




@Component({
  selector: 'app-creat-syllabus-general',
  templateUrl: './creat-syllabus-general.component.html',
  styleUrls: ['./creat-syllabus-general.component.scss']

})

export class CreatSyllabusGeneralComponent {
  Level: Level[];
  Error: any;

  selectedLevel: Level | undefined;

  constructor(private formBuilder: FormBuilder) {
      this.Level = [
          {level: '1'},
          {level: '2'},
          {level: '3'},
          {level: '4'},
          {level:'5'}
      ];
  }
  ngOnInit() {
    this.create_syllabus = this.formBuilder.group({
      syllabusName:['',[Validators.required, Validators.minLength(2)]],
      level: ['', [Validators.required,Validators.minLength(2)]],
      atendeeNumbers: ['', [Validators.required, Validators.minLength(2)]],
      technicalRequirement: ['', [Validators.required, Validators.minLength(2)]],
      courseObjectives: ['', [Validators.required, Validators.minLength(2)]],

    });
  }
  public create_syllabus!: FormGroup;


  onSubmit() {
    if (this.create_syllabus.valid) {
      document.querySelector('#create_syllabus-testing-json-qqgido')!.innerHTML =
        JSON.stringify(this.create_syllabus.value);
        console.log(JSON.stringify(this.create_syllabus.value));
        return this.create_syllabus.value
    } else {
      // alert('Fail' + JSON.stringify(this.create_syllabus.get('email')?.errors));
      this.Error = this.create_syllabus.get('error')?.errors;
    }
    return false;

  }

  htmlEditor: string = '';


}
interface Level {
  level: string

}
