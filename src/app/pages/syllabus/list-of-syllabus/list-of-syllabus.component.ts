import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ListOfSyllabusService } from '../services/list-of-syllabus.service';
import { FormControl, FormGroup } from '@angular/forms';
import { PrimeNGConfig } from 'primeng/api';
import { MenuItem } from 'src/app/core-component/models/menu-item';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-list-of-syllabus',
  templateUrl: './list-of-syllabus.component.html',
  styleUrls: ['./list-of-syllabus.component.scss'],
  providers: [MessageService],
})
export class ListOfSyllabusComponent implements OnInit {
  

  
  [x: string]: any;
  syllabuses: any[] = [''];
  startDate: Date;
  @Input()
  name: string = 'Import';
  name1: string = 'Add Syllabus';
  displayBasic: boolean | undefined;
  items: MenuItem[];
  first = 0;
  rowpage = 10;
  startSpin: boolean = false;
  rows: any;
  searchKey: '';
  public profileForm = new FormGroup({
    search: new FormControl(''),
  });
  displayConfirmDialog: boolean | undefined;
  showConfirmDialog() {
    this.displayConfirmDialog = true;
  }

  showFilterForm = false;
  toggleFilterForm() {
    this.showFilterForm = !this.showFilterForm;
  }


  hideDialog() {
    this.displayConfirmDialog = false;
  }

  toggleImport() {
    this.displayBasic = true;
  }

  selectedId: string = '';
  constructor(
    private ListOfSyllabus: ListOfSyllabusService,
    private messageService: MessageService,
    private primengConfig: PrimeNGConfig,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.getAllSyllabus()
    this.primengConfig.ripple = true;
    this.items = [
      {
        items: [
          {
            label: 'Add training program',
            icon: 'pi pi-plus-circle',
            command: () => {
              this.router.navigate(['/training/view/add']);
            },
          },
          {
            label: 'Edit Syllabus',
            icon: 'pi pi-pencil',
            command: () => {
              this.edit();
            },
          },
          {
            label: 'Duplicate Syllabus',
            icon: 'pi pi-clone',
            command: () => {
              this.duplicate();
            },
          },
          {
            label: 'Delete Syllabus',
            icon: 'pi pi-trash',
            command: () => {
              this.showConfirmDialog();
            },
          },
        ],
      },
    ];
  }
  viewDetail(row: any) {
    console.log('Syllabus id: ' + row.id);

    this.router.navigate(['syllabus/syllabus-detail'], {
      queryParams: { id: row.id },
    });
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
    return this.syllabuses
      ? this.first === this.syllabuses.length - this.rowpage
      : true;
  }

  isFirstPage(): boolean {
    return this.syllabuses ? this.first === 0 : true;
  }

  changeStatus(product: any) {}
  public search() {
    console.log(JSON.stringify(this.profileForm.value));
  }

  showBasicDialog() {
    this.displayBasic = true;
  }

  onDeleteSyllabus(id: any) {
    console.log('Will delete this id');
    console.log(id);
    this.ListOfSyllabus.deleteSyllabus(id).subscribe(
      (res) => {
        console.log('Delete Successfully');
        this.getAllSyllabus();
        this.hideDialog();
      },
      (error) => {
        console.log('Delete Fail');
        console.log(error);
      }
    );
  }
  selectId(id: any) {
    this.selectedId = id;
    console.log('selected id: ');
    console.log(this.selectedId);
  }
  getAllSyllabus() {
    this.ListOfSyllabus.getSyllabus().subscribe(
      (response) => {
        console.log('success');
        console.log(response);
        this.syllabuses = response;
      },
      (error) => {
        console.log('fail');
        console.log(error);
      }
    );
  }
  searchNameSyllabus() {
    this.startSpin = true;
    console.log('Search: ');
    console.log(this.searchKey);
    this.ListOfSyllabus.searchSyllabus(this.searchKey).subscribe(
      (res: any) => {
        console.log('Search Successfully');
        this.syllabuses = res;
        this.startSpin = false;
      },
      (error) => {
        console.log('Search Fail');
        console.log(error);
        this.startSpin = false;

      }
    );
  }
}
