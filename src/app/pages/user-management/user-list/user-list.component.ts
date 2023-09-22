import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { SortEvent } from 'primeng/api';
import { Table } from 'primeng/table';
import { PrimeNGConfig } from 'primeng/api';
import { FormControl } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SelectItem } from 'primeng/api';
import { MenuItem, MessageService } from 'primeng/api';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit{
  public searchForm = new FormGroup({
    search : new FormControl(''),
  });
  
  name : string = "";
  // name1: string = 'import';
  // name2: string = 'add';
  showFilterForm = false;
  showImportForm = false;
  // product: any[] = [];
  @Input()
  rows: any;

  @Input() searchText: any;
  constructor(
    private primengConfig: PrimeNGConfig,
    private messageService: MessageService,
    private router: Router,
    private route: ActivatedRoute  
  ) {}
  toggleFilterForm() {
    this.showFilterForm = !this.showFilterForm;
  }
  toggleImportForm() {
    this.showImportForm= !this.showImportForm;
  }
  // toggleImportForm() {
  //   this.showImportForm = !this.showImportForm;
  // }
  
  public filterForm!: FormGroup;
  public importForm!: FormGroup;
  ngOnInit() {
    // this.primengConfig.ripple = true;
    // this.getTraining()
    this.primengConfig.ripple = true;
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = +params.get('id');
    });
    this.items = [
      {
        items: [
          {
            label: 'Class Infor',
            icon: 'pi pi-info-circle',
            command: () => {
              this.info();
            },
          },
          {
            label: 'Edit Class',
            icon: 'pi pi-pencil',
            command: () => {
              this.edit();
            },
          },
          {
            label: 'Duplicate Class',
            icon: 'pi pi-clone',
            command: () => {
              this.duplicate();
            },
          },
          {
            label: 'Delete Class',
            icon: 'pi pi-trash',
            command: () => {
              this.delete();
            },
          },
        ],
      },
    ];
  }

  testFunc() {
    console.log('ROWS');
    console.log(this.rows);
  }

  viewDetail(row: any) {
    console.log('Class id: ' + row.id);

    this.router.navigate(['/class/view/detail'], {
      queryParams: { id: row.id },
    });
  }

  info() {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Class Info',
    });
  }

  edit() {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Data Edited',
    });
  }

  duplicate() {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Data Duplicated',
    });
  }

  delete() {
    this.messageService.add({
      severity: 'warn',
      summary: 'Delete',
      detail: 'Data Deleted',
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
    console.log(JSON.stringify(this.searchForm.value));
  }

  


  

  onSubmit() {
    console.log(JSON.stringify(this.searchForm.value));
  }
  onReset() {
    this.importForm.reset();    
    this.filterForm.reset();
  }

  displayBasic: boolean | undefined;
  displayBasic2: boolean | undefined;
  openFilter() {
    // logic của hàm openFilter ở đâ

  }
  changeStatus(product: any) {
    // code thực hiện thay đổi trạng thái của sản phẩm tại đây
  }

  showBasicDialog() {
    this.displayBasic = true;
  }
  showBasicDialog2() {
    this.displayBasic2 = true;
  }
  items: MenuItem[];
  id: number;
  first = 0;
  rowpage = 10;
  listclasses: any[] = [''];

  headers = [
    'ID',
    'Fullname',
    'Email',
    'Date of birth',
    'Gender',
    'Level',
    'Type',
    'Status',
  ];
}





