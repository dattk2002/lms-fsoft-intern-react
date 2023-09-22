import { SyllabusDetailService } from './../../../pages/syllabus/syllabus-detail/syllabus-detail.service';
import { Component, Input } from '@angular/core';
interface Trainer {
  name: string;
}
@Component({
  selector: 'app-syllabus-detail-outline',
  templateUrl: './syllabus-detail-outline.component.html',
  styleUrls: ['./syllabus-detail-outline.component.scss'],
})
export class SyllabusDetailOutlineComponent {
  @Input()
  outlineSyllabusDTO: any;
  displayPosition: boolean = false;
  position!: string;
  outline: any;
  cities: Trainer[];
  trainer: Trainer[];
  location: Trainer;
  @Input()
  viewMode: string;
  showPositionDialog(position: string): void {
    this.position = position;
    this.displayPosition = true;
  }

  constructor(private SyllabusDetail: SyllabusDetailService) {}
  ngOnInit() {
    this.data.datasets[0].data = [
      this.timeAllocationDTO.assignmentPercent,
      this.timeAllocationDTO.conceptPercent,
      this.timeAllocationDTO.guidePercent,
      this.timeAllocationDTO.testPercent,
      this.timeAllocationDTO.examPercent,
    ];

    this.trainer = [
      { name: 'Ba Chu Heo' },
      { name: 'Nguyen Mai Tong' },
      { name: 'Huynh Khanh'},
    ];
    this.cities = [
      { name: 'Ftowm 1' },
      { name: 'Ftowm 2' },
      { name: 'Ftowm 3' },
    ];
  }
  // viewDetail(row: any) {
  //   console.log('Syllabus id: ' + row.id);

  //   this.router.navigate(['syllabus/syllabus-detail'], {
  //     queryParams: { id: row.id },
  //   });
  // }
  @Input()
  timeAllocationDTO: any = [];
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
