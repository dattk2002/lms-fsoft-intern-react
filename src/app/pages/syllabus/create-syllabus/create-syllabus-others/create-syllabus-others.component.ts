import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SyllabusDetailService } from '../../syllabus-detail/syllabus-detail.service';

@Component({
  selector: 'app-create-syllabus-others',
  templateUrl: './create-syllabus-others.component.html',
  styleUrls: ['./create-syllabus-others.component.scss'],
})
export class CreateSyllabusOthersComponent {
  others: any;

  Error: any;
  htmlEditor: string = '';
  constructor(
    private SyllabusDetail: SyllabusDetailService,
    private formBuilder: FormBuilder
  ) {}





  ngOnInit() {

    this.create_syllabus = this.formBuilder.group({
      quiz: ['', [Validators.required]],
      assignment: ['', [Validators.required]],
      final: ['', [Validators.required]],
      finalTheory: ['', [Validators.required]],
      finalPractice: ['', [Validators.required]],
      gpa: ['', [Validators.required]],
      training: ['', [Validators.required]],
    });
  }
  public create_syllabus!: FormGroup;
  onSubmit() {

    if (this.create_syllabus.valid) {
      console.log('valid');

      document.querySelector(
        '#create_syllabus-testing-json-qqgido'
      )!.innerHTML = JSON.stringify(this.create_syllabus.value);
      console.log(this.create_syllabus.value);
      return this.create_syllabus.value
    } else {
      // alert('Fail' + JSON.stringify(this.create_syllabus.get('email')?.errors));
      this.Error = this.create_syllabus.get('error')?.errors;
    }
    return false;
  }

  data = {
    datasets: [
      {
        data: [150, 150, 29, 160, 0],
        backgroundColor: [
          '#5388D8',
          '#F4BE37',
          '#FF9F40',
          '#0D2535',
          '#206EE6',
        ],
        borderColor: ['#5388D8', '#F4BE37', '#FF9F40', '#0D2535', '#206EE6'],
      },
    ],
  };
}
