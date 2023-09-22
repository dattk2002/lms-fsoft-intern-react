import { Component, Input, OnInit } from '@angular/core';
import { TrainingProgramServiceService } from 'src/app/pages/training/service/training-program-service.service';
import { SelectItem, PrimeNGConfig } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';
import { tr } from 'date-fns/locale';

@Component({
  selector: 'app-training-detail-share',
  templateUrl: './training-detail-share.component.html',
  styleUrls: ['./training-detail-share.component.scss'],
})
export class TrainingDetailShareComponent {
  @Input()
  trainingProgramId: string = null;

  syllabuses: any;

  constructor(
    private primengConfig: PrimeNGConfig,
    private trainingProgramService: TrainingProgramServiceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    if (this.trainingProgramId == null) {
      this.route.queryParams.subscribe((params) => {
        console.log('params');

        console.log(params['id']); // { id: "123" }
        if (params['id'] != undefined) {
          this.trainingProgramId = params['id'];
        } else {
          this.trainingProgramId = localStorage.getItem(
            'createClassTrainingProgramId'
          );
        }
      });
    }

    this.getTrainingDetail(this.trainingProgramId);
    this.route.paramMap.subscribe((params) => {
      this.trainingProgramId = params.get('trainingProgramId');
    });
  }
  getTrainingDetail(id: string) {
    this.trainingProgramService.getTrainingDetail(id).subscribe(
      (response: any) => {
        console.log('Successfully');
        console.log(response);
        console.log(response.contents);
        this.syllabuses = response.contents;
      },
      (error) => {
        console.log('Fail');
        console.log(error);
        console.log(error.error.status);

        this.syllabuses = error;
      }
    );
  }
  changeStatus(param: any) {}
}
