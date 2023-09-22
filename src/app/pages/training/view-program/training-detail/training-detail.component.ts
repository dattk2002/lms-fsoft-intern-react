import { Component, OnInit } from '@angular/core';
import { TrainingProgramServiceService } from '../../service/training-program-service.service';
import { SelectItem, PrimeNGConfig } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';
import { tr } from 'date-fns/locale';

@Component({
  selector: 'app-training-detail',
  templateUrl: './training-detail.component.html',
  styleUrls: ['./training-detail.component.scss'],

})

export class TrainingDetailComponent {

  trainingProgramId: string;
  syllabuses: any;
  constructor(private primengConfig: PrimeNGConfig, private trainingProgramServiceService: TrainingProgramServiceService, private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;

    this.route.queryParams.subscribe((params) => {
      console.log(params); // { id: "123" }
      this.trainingProgramId = params['id'];
    });
    this.getTrainingDetail(this.trainingProgramId)
  }
  getTrainingDetail(id: string) {
    this.trainingProgramServiceService.getTrainingDetail(id).subscribe(
      (response: any) => {
        console.log('Successfully');
        console.log(response);
        console.log(response.contents);

        this.syllabuses = response.contents;
      }, (error) => {
        console.log('Fail');
        console.log(error);
        return null;
      }
    );
  }
  changeStatus(param: any){

  }

}
