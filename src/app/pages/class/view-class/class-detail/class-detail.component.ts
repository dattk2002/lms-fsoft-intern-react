import { ActivatedRoute } from '@angular/router';
import { Component, Input } from '@angular/core';
import { GetClassDetailService } from '../../services/view-class/get-class-detail.service';

@Component({
  selector: 'app-class-detail',
  templateUrl: './class-detail.component.html',
  styleUrls: ['./class-detail.component.scss'],
})
export class ClassDetailComponent {
  generalInformation: any;
  selectedDates = ['2023-04-10', '2023-04-08'];
  id: string = '';
  programId: string = null;

  constructor(
    private route: ActivatedRoute,
    private getClassDetailService: GetClassDetailService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      console.log(params); // { id: "123" }
      this.id = params['classId'];
    });

    this.getClassDetailService.getTraining(this.id).subscribe(
      (response) => {
        console.log('Get Class Detail SUCCESS');
        console.log(response);
        this.generalInformation = response;
        console.log(this.generalInformation);
        this.programId = this.generalInformation.trainingPrograms.programId;
      },
      (error) => {
        console.log('Get Class Detail ERROR');
        console.log(error);
      }
    );
  }
}
