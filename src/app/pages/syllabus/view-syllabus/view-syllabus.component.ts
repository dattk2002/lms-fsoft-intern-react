import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/core-component/auth/services';
import { GetListOfSyllabusesTestService } from '../services/get-list-of-syllabuses-test.service';

@Component({
  selector: 'app-view-syllabus',
  templateUrl: './view-syllabus.component.html',
  styleUrls: ['./view-syllabus.component.scss'],
})
export class ViewSyllabusComponent implements OnInit {
  constructor(
    private account: AccountService,
    private getListOfSyllabusService: GetListOfSyllabusesTestService
  ) {}
  ngOnInit(): void {
    // this.account.getAllUser().subscribe((res) => {
    //   console.log(res);
    // });
  }

  getAllSyllabus() {
    this.getListOfSyllabusService.getSyllabus().subscribe(
      (data) => {
        console.log('Successfully');
        console.log(data);
        console.log(JSON.stringify(data));
      },
      (error: HttpErrorResponse) => {
        console.log('Failed');
        console.log(error);
      }
    );
  }

  editSyllabus() {
    this.getListOfSyllabusService.editSyllabus('abdsed').subscribe(
      (data) => {
        console.log('Successfully');
        console.log(data);
        console.log(JSON.stringify(data));
      },
      (error: HttpErrorResponse) => {
        console.log('Failed');
        console.log(error);
      }
    );
  }
}
