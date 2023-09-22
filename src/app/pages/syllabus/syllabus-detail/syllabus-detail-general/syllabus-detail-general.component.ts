import { SyllabusDetailService } from './../syllabus-detail.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-syllabus-detail-general',
  templateUrl: './syllabus-detail-general.component.html',
  styleUrls: ['./syllabus-detail-general.component.scss'],
})
export class SyllabusDetailGeneralComponent {
  [x: string]: any;
  @Input()
  general: any;
  constructor(  private SyllabusDetail: SyllabusDetailService) {}
  ngOnInit() {

  }

}
