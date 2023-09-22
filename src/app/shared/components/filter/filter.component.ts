import { Component, Output, EventEmitter, Input, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { SelectItem, PrimeNGConfig } from 'primeng/api';
import { FilterServiceService } from '../../services/filter/filter-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  cities!: any[];
  fsuList!: SelectItem[];
  trainerList!: SelectItem[];
  item!: string;
  submitted: boolean | undefined;
  @ViewChild('formDirective') private formDirective: NgForm;
  classTime = [
    { label: 'Morning', value: 'Morning' },
    { label: 'Noon', value: 'Noon' },
    { label: 'Night', value: 'Night' },
    { label: 'Online', value: 'Online' },
  ];

  constructor(
    private primengConfig: PrimeNGConfig,
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
    this.cities = [
      { name: 'Ho Chi Minh', code: 'HCM' },
      { name: 'Da Nang', code: 'DN' },
      { name: 'Ha Noi', code: 'HN' },
      { name: 'Can Tho', code: 'CT' },
      { name: 'Long An', code: 'LA' },
    ];

    this.fsuList = [];
    for (let i = 0; i < 10000; i++) {
      this.fsuList.push({ label: 'FSU ' + i, value: 'FSU ' + i });
    }
    this.trainerList = [];
    for (let i = 0; i < 10000; i++) {
      this.trainerList.push({ label: 'Trainer ' + i, value: 'Trainer ' + i });
    }
  }

  public filterForm!: FormGroup;

  ngOnInit() {
    this.primengConfig.ripple = true;
    this.filterForm = this.formBuilder.group({
      selectedCities: [[], [Validators.required]],
      startDate: [null, [Validators.required]],
      endDate: [null, [Validators.required]],
      classTime: [[]],
      selectedStatus: [null, [Validators.required]],
      selectedAttendee: [null, [Validators.required]],
      fsu: [],
      trainer: [],
    });
  }

  @Input()
  url = '';

  
  returnArray: any;

  public onSubmit():any {
  }

  returnClass() {
    this.router.navigate(['/class'])
  }
  test = 'Test';
  btnReset = 'Clear';
  btnSearch = 'Search';
}
