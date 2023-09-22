import { SyllabusDetailService } from './../syllabus-detail.service';
import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-syllabus-detail-others',
  templateUrl: './syllabus-detail-others.component.html',
  styleUrls: ['./syllabus-detail-others.component.scss'],
})
export class SyllabusDetailOthersComponent {
  @Input()
  otherSyllabusDTOOther: any;
  public create_syllabus!: FormGroup;
  Error: any;
  onSubmit() {
    if (this.create_syllabus.valid) {
      document.querySelector(
        '#create_syllabus-testing-json-qqgido'
      )!.innerHTML = JSON.stringify(this.create_syllabus.value);
      console.log(JSON.stringify(this.create_syllabus.value));
    } else {
      // alert('Fail' + JSON.stringify(this.create_syllabus.get('email')?.errors));
      this.Error = this.create_syllabus.get('error')?.errors;
    }
    return false;
  }

  htmlEditor: string = '';
  constructor(
    private SyllabusDetail: SyllabusDetailService,
    private formBuilder: FormBuilder
  ) {}
  ngOnInit() {
  this.data.datasets[0].data = [this.timeAllocationDTO.assignmentPercent, this.timeAllocationDTO.conceptPercent, this.timeAllocationDTO.guidePercent, this.timeAllocationDTO.testPercent, this.timeAllocationDTO.examPercent]
    this.create_syllabus = this.formBuilder.group({
      quiz: ['', [Validators.required, Validators.minLength(2)]],
      assignment: ['', [Validators.required, Validators.minLength(2)]],
      final: ['', [Validators.required, Validators.minLength(2)]],
      gpa: ['', [Validators.required, Validators.minLength(2)]],
      training: ['', [Validators.required, Validators.minLength(2)]],
    });
  }
  @Input()
 timeAllocationDTO: any = []
  data = {
    datasets: [
      {
        data: [],
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
