import { Subject } from 'rxjs';
import { CreateClassAddSyllabusService } from './create-class-add-syllabus.service';
import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-create-class-add-syllabus',
  templateUrl: './create-class-add-syllabus.component.html',
  styleUrls: ['./create-class-add-syllabus.component.scss'],
})
export class CreateClassAddSyllabusComponent implements OnInit {
  sourceSyllabus: any;
  trainingId: any;
  id: string = '';
  constructor(
    private createAddSyllabus: CreateClassAddSyllabusService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.trainingId = localStorage.getItem('createClassTrainingProgramId');
    this.route.queryParams.subscribe((params) => {
      console.log(params);
      this.id = params['id'];
    });
    this.createAddSyllabus.getTrainingDetail(this.trainingId).subscribe(
      (response) => {
        console.log('success');
        console.log(response);
        this.sourceSyllabus = response;
      },
      (error) => {
        console.log('fail');
        console.log(error);
      }
    );
  }
}
