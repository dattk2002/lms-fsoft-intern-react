import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SelectItem, PrimeNGConfig } from 'primeng/api';
import { GetAllTrainingClassServiceService } from '../services/view-class/get-all-training-class-service.service';
import { filter } from 'rxjs';
import { environment } from 'enviroments/environment.prod';
import { ViewChild, AfterViewInit } from '@angular/core';
import { FilterComponent } from 'src/app/shared/components';
import { FilterServiceService } from 'src/app/shared/services/filter/filter-service.service';

@Component({
  selector: 'app-view-class',
  templateUrl: './view-class.component.html',
  styleUrls: ['./view-class.component.scss'],
  styles: [
    `
      :host ::ng-deep .p-button {
        margin: 0 0.5rem 0 0;
        min-width: 10rem;
      }

      p {
        margin: 0;
      }

      .confirmation-content {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      :host ::ng-deep .p-dialog .p-button {
        min-width: 6rem;
      }
    `,
  ],
})
export class ViewClassComponent implements OnInit {
  public profileForm = new FormGroup({
    name: new FormControl(''),
  });
  public nameForm!: FormGroup;
  public filterForm!: FormGroup;

  @Input()
  searchText: '';

  @Input()
  name: string = 'Filter';
  name1: string = 'Import';
  name2: string = 'Add Class';
  first = 0;
  rows = 10;
  showFilterForm = false;
  startSpin: boolean = false;
  // searchKey: '';
  listclasses: any[] = [''];
  classes: any[] = [];
  filterJson: any[] = [];
  filterUrl: string = "https://deploy-fa-training.azurewebsites.net/api/TrainingClass/FilterResult";
  updateId: string;
  @ViewChild(FilterComponent) filterComponent: FilterComponent;

  // toggleFilterForm() {
  //   this.showFilterForm = !this.showFilterForm;
  // }

  constructor(
    private primengConfig: PrimeNGConfig,
    private router: Router,
    private GetAllTrainingClass: GetAllTrainingClassServiceService,
    private filterService: FilterServiceService
  ) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
    this.getClass();
  }

  next() {
    this.first = this.first + this.rows;
  }

  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }

  isLastPage(): boolean {
    return this.listclasses
      ? this.first === this.listclasses.length - this.rows
      : true;
  }

  isFirstPage(): boolean {
    return this.listclasses ? this.first === 0 : true;
  }

  createName() {
    console.log(JSON.stringify(this.profileForm.value));
  }

  onSubmit() {}

  onReset() {
    // this.filterForm.reset();
    this.displayBasicFilter = false;
  }

  displayBasicFilter: boolean | undefined;
  displayBasicImport: boolean | undefined;

  openFilter() {
    // logic của hàm openFilter ở đây
  }
  changeStatus(product: any) {
    // code thực hiện thay đổi trạng thái của sản phẩm tại đây
  }

  showBasicDialogFilter() {
    this.displayBasicFilter = true;
  }

  hideBasicDialogFilter() {
    this.displayBasicFilter = false;
  }

  showBasicDialogImport() {
    this.displayBasicImport = true;
  }

  addClass() {
    this.router.navigate(['/class/create']);
  }

  public getClass() {
    this.GetAllTrainingClass.getClass().subscribe(
      (response: any) => {
        console.log('Get all classes Successfully');
        console.log(response);
        this.classes = response;
      },
      (error) => {
        console.log('Fail');
        console.log(error);
        return null;
      }
    );
  }

  searchNameClass() {
    this.startSpin = true;
    console.log('Search: ');
    console.log(this.searchText);
    this.GetAllTrainingClass.searchClass(this.searchText).subscribe(
      (res: any) => {
        console.log('Search Successfully');
        this.classes = res;
        console.log(res);

        this.startSpin = false;
      },
      (error) => {
        console.log('Search Fail');
        console.log(error);
        this.startSpin = false;
      }
    );
  }

  public onDuplicateClass(id: string) {
    this.GetAllTrainingClass.duplicateClass(id).subscribe(
      (result) => {
        // Xử lý kết quả trả về từ API (nếu cần)
        console.log('Duplicate Class Successfully');
        this.getClass();
      },
      (error) => {
        console.log('Duplicate Fail');
        console.log(error);
        return null;
      }
    );
  }

  onFilter() {
    this.classes = this.filterComponent.onSubmit();
    this.hideBasicDialogFilter();
    // this.classes = this.filterComponent.returnArray;

    this.filterService
      .postFilter(
        this.filterComponent.url,
        this.filterComponent.filterForm.value
      )
      .subscribe(
        (response) => {
          console.log('Filter Successfully!');
          console.log(response);
          // return response;
          this.classes = response;
        },
        (error) => {
          console.log('Filter Failed!');
          console.log(error);
          return null;
        }
      );
  }
}
