import { Component, Input, ViewChild } from '@angular/core';
import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
} from 'ng-apexcharts';
import { SyllabusDetailService } from './syllabus-detail.service';
import { ListOfSyllabusService } from '../services/list-of-syllabus.service';
import { PrimeNGConfig, MessageService, MenuItem } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};
@Component({
  selector: 'app-syllabus-detail',
  templateUrl: './syllabus-detail.component.html',
  styleUrls: ['./syllabus-detail.component.scss'],
  providers: [MessageService],
})
export class SyllabusDetailComponent {
  [x: string]: any;
  title = 'scrollpanel';
  activeState: boolean[] = [true, false, false];
  SyllabusDetails: any;
  items: MenuItem[];
    selectedId: string = '';
  id: string = '';
  @Input() Syllabusdetail: any[];
  constructor(
    private ListOfSyllabus: ListOfSyllabusService,
    private SyllabusDetail: SyllabusDetailService,
    private messageService: MessageService,
    private primengConfig: PrimeNGConfig,
    private route: ActivatedRoute,
     private router: Router
  ) {}

  toggle(index: number) {
    this.activeState[index] = !this.activeState[index];
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      console.log(params); // { id: "123" }
      this.id = params['id'];
    });
    this.primengConfig.ripple = true;
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
    this.items = [
      {
        items: [
          {
            label: 'Edit syllabus',
            icon: 'pi pi-pencil',
            command: () => {
              this.add();
            },
          },
          {
            label: 'Duplicate syllabus',
            icon: 'pi pi-clone',
            command: () => {
              this.edit();
            },
          },
          {
            label: 'De-activate syllabus',
            icon: 'pi pi-eye-slash',
            command: () => {
              this.duplicate();
            },
          },
          {
            label: 'Delete Syllabus',
            icon: 'pi pi-trash',
            command: () => {
              this.onDeleteSyllabus();
            },
          },
        ],
      },
    ];
  }
  add() {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Syllabus Edited',
    });
  }
  edit() {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Syllabus Edited',
    });
  }

  duplicate() {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Syllabus Duplicated',
    });
  }

  delete() {
    this.messageService.add({
      severity: 'warn',
      summary: 'Delete',
      detail: 'Syllabus Deleted',
    });
  }
  onDeleteSyllabus() {
    console.log(this.id);
    this.ListOfSyllabus.deleteSyllabus(this.id).subscribe(
      (res) => {
        console.log('Delete Successfully');
        this.router.navigate(['syllabus']);
      },
      (error) => {
        console.log('Delete Fail');
        console.log(error);
      }
    );
  }

}
