import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FilterTrainingCalendarServiceService } from '../../service/filter-training-calendar-service.service';
import { environment } from 'enviroments/environment.prod';
// import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-training-calendar-search-filter',
  templateUrl: './training-calendar-search-filter.component.html',
  styleUrls: ['./training-calendar-search-filter.component.scss'],
})
export class TrainingCalendarSearchFilterComponent implements OnInit {
  name: string = 'Filter';
  displayBasic: boolean;
  showFilterForm = false;
  searchText: any;
  startSpin: boolean = false;
  filterUrl: string = environment.classUrl + '/FilterResult'
  public filterForm!: FormGroup;
  public searchForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }
  showBasicDialog() {
    this.displayBasic = true;
  }

  toggleFilterForm() {
    this.showFilterForm = !this.showFilterForm;
  }
  public onSubmit() {}

  onReset() {
    this.filterForm.reset();
  }

  openFilter() {
    // logic của hàm openFilter ở đây
  }
  changeStatus(product: any) {
    // code thực hiện thay đổi trạng thái của sản phẩm tại đây
  }

  public createName() {
    console.log(JSON.stringify(this.searchForm.value));
  }

  searchName() {
    this.startSpin = true;
  }
}
