import { Subject } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { CreateClassAddSyllabusService } from 'src/app/pages/class/create-class/create-class-add-syllabus/create-class-add-syllabus.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'add-syllabus',
  templateUrl: './add-syllabus.component.html',
  styleUrls: ['./add-syllabus.component.scss'],
})
export class AddSyllabusComponent implements OnInit {
  @Input() sourceSyllabus: any;

  [x: string]: any;
  activeState: boolean[] = [true, false, false];
  searchText: any;
  date: any;

  public profileForm = new FormGroup({
    search: new FormControl(''),

  });
  public profileForm1 = new FormGroup({
    name: new FormControl(''),
    day: new FormControl(''),
    hours: new FormControl(''),
  });
  changeStatus(product: any) {}
  constructor(
    private primengConfig: PrimeNGConfig,
    private addTraining: CreateClassAddSyllabusService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
  syllabusList: any;
  displayPosition: boolean = false;
  Position: boolean = false;
  position!: string;
  id: string = '';
  addposition!: string;
  showPositionDialog(position: string): void {
    this.position = position;
    this.displayPosition = true;
  }
  PositionDialog(addposition: string): void {
    this.addposition = addposition;
    this.Position = true;
  }
  public search() {
    console.log(JSON.stringify(this.profileForm.value));
  }
  public createsyllabus() {
    console.log(JSON.stringify(this.profileForm1.value));
  }
  viewDetail(row: any) {
    console.log('Syllabus id: ' + row.id);

    this.router.navigate(['/class/create/add-syllabus'], {
      queryParams: { id: row.id },
    });
  }
}
