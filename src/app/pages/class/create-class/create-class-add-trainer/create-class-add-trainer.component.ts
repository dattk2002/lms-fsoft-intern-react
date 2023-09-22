import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SyllabusDetailService } from 'src/app/pages/syllabus/syllabus-detail/syllabus-detail.service';

@Component({
  selector: 'app-create-class-add-trainer',
  templateUrl: './create-class-add-trainer.component.html',
  styleUrls: ['./create-class-add-trainer.component.scss'],
})
export class CreateClassAddTrainerComponent {
  id = '4c7698a6-12e1-4f8c-a74c-fe01db195f09';
  SyllabusDetails : any
  constructor(
    private SyllabusDetail: SyllabusDetailService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  viewDetail(row: any) {
    console.log('Syllabus id: ' + row.id);

    this.router.navigate(['/class/create/add-trainer'], {
      queryParams: { id: row.id },
    });
  }
  ngOnInit() {
    this.SyllabusDetail.getAllSyllabusDetail(this.id).subscribe(
      (response) => {
        console.log('success');
        console.log(response);
        this.SyllabusDetails = response;
      },
      (error) => {
        console.log('fail');
        console.log(error);
      }
    );
  }
}
