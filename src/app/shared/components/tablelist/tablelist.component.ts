import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { SortEvent } from 'primeng/api';
import { Table } from 'primeng/table';
import {
  PrimeNGConfig,
  ConfirmationService,
  ConfirmEventType,
} from 'primeng/api';
import { FormControl } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SelectItem } from 'primeng/api';
import { MenuItem, MessageService } from 'primeng/api';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { GetAllTrainingClassServiceService } from 'src/app/pages/class/services/view-class/get-all-training-class-service.service';
import { environment } from 'enviroments/environment.prod';
import { Message } from 'primeng/api';

// interface People {
//   userid?: string;
//   username?: string;
//   fullname?: string;
//   email?: string;
//   logindate?: string;
//   updatedate?: string;
//   status?: string;
//   gender?: string;
//   createddate?: string;
//   dob?: string;
//   role?: string;
// }

@Component({
  selector: 'app-tablelist',
  templateUrl: './tablelist.component.html',
  styleUrls: ['./tablelist.component.scss'],
  providers: [MessageService],
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
export class TablelistComponent implements OnInit {
  items: MenuItem[];
  id: number;
  first = 0;
  rowpage = 10;
  listclasses: any[] = [''];
  displayDuplicateDialog: boolean | undefined;

  public profileForm = new FormGroup({
    name: new FormControl(''),
  });
  public filterForm!: FormGroup;

  name: string = 'Filter';
  name1: string = 'import';
  name2: string = 'add';
  showFilterForm = false;
  displayConfirmDialog: boolean | undefined;

  filterUrl: string = environment.classUrl + '/FilterResult';

  headers = [
    'Class',
    'Class Code',
    'Created On',
    'Created By',
    'Duration',
    'Attendee',
    'Location',
    'FSU',
    '',
  ];

  @Input()
  rows: any;

  @Input() searchText: any;

  constructor(
    private messageService: MessageService,
    private primengConfig: PrimeNGConfig,
    private router: Router,
    private route: ActivatedRoute, // private customerService: CustomerService
    private GetAllTrainingClass: GetAllTrainingClassServiceService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = +params.get('id');
    });
  }

  testFunc() {
    console.log('ROWS');
    console.log(this.rows);
  }

  viewDetail(row: any) {
    console.log('Class id: ' + row.id);

    this.router.navigate(['/class/view/detail'], {
      queryParams: { classId: row.id },
    });
  }

  next() {
    this.first = this.first + this.rowpage;
  }

  prev() {
    this.first = this.first - this.rowpage;
  }

  reset() {
    this.first = 0;
  }

  isLastPage(): boolean {
    return this.listclasses
      ? this.first === this.listclasses.length - this.rowpage
      : true;
  }

  isFirstPage(): boolean {
    return this.listclasses ? this.first === 0 : true;
  }

  public createName() {
    console.log(JSON.stringify(this.profileForm.value));
  }

  public onSubmit() {}

  onReset() {
    this.filterForm.reset();
  }

  displayBasicFilter: boolean | undefined;

  showConfirmDialog() {
    this.displayConfirmDialog = true;
  }

  openFilter() {
    // logic của hàm openFilter ở đây
  }
  changeStatus(product: any) {
    // code thực hiện thay đổi trạng thái của sản phẩm tại đây
  }

  getClass() {
    this.GetAllTrainingClass.getClass().subscribe(
      (response: any) => {
        console.log('Successfully');
        console.log(response);
        this.rows = response;
      },
      (error) => {
        console.log('Fail');
        console.log(error);
        return null;
      }
    );
  }

  onDuplicateClass(id: string) {
    this.GetAllTrainingClass.duplicateClass(id).subscribe(
      (result) => {
        // Xử lý kết quả trả về từ API (nếu cần)

        console.log('Duplicate Class Successfully');
        this.showSuccessDialog();
        this.getClass();
        
      },
      (error) => {
        console.log('Duplicate Fail');
        console.log(error);
        return null;
      }
    );
  }

  onDeleteClass(id: any) {
    console.log('Will delete this id');
    console.log(id);
    this.GetAllTrainingClass.deleteClass(id).subscribe(
      (res) => {
        console.log('Delete Class Successfully');
        this.getClass();
        this.hideDialog();
      },
      (error) => {
        console.log('Delete Fail');
        console.log(error);
      }
    );
  }

  hideDialog() {
    this.displayConfirmDialog = false;
    this.showToast();
  }

  showSuccessDialog() {
    this.displayDuplicateDialog = true;
}

  showToast() {
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Successfully!' });
    }


}
