import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TrainingProgramServiceService } from '../../service/training-program-service.service';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { SelectItem, PrimeNGConfig } from 'primeng/api';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-of-training-program',
  templateUrl: './list-of-training-program.component.html',
  styleUrls: ['./list-of-training-program.component.scss'],
  styles: [`
      :host ::ng-deep .p-button {
          margin: 0 .5rem 0 0;
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
  `]
})
export class ListOfTrainingProgramComponent {
  trainingId: string;
  searchText: any;
  name: string = 'Filter';
  name1: string = 'import';
  name2: string = 'add';
  showFilterForm = false;
  product: { id: string }[];
  result: any;
  first = 0;
  rows = 10;
  rowpage = 10;
  index: any;
  updateId: string;
  displayBasicFilter: boolean = false;
  displayBasicImport: boolean = false;
  displayConfirmDialog: boolean | undefined;
  startSpin: boolean = false;

  Keysearch: '';
  public profileForm = new FormGroup({
    search: new FormControl(''),
  });
  showConfirmDialog() {
    this.displayConfirmDialog = true;
  }
  showBasicFilterDialog() {
    this.displayBasicFilter = true;
  }

  showBasicImportDialog() {
    this.displayBasicImport = true;
  }
  hideDialog() {
    this.displayConfirmDialog = false;
  }



  // product: { id: string };




  constructor(private primengConfig: PrimeNGConfig, private trainingProgramService: TrainingProgramServiceService,
    private router: Router
  ) {

  }
  changeStatus(product: any) { }
  public search() {
    console.log(JSON.stringify(this.profileForm.value));
  }
  getTraining() {
    this.trainingProgramService.getTraining().subscribe(
      (response: any) => {
        console.log('getTraining Successfully');
        console.log(response);
        this.product = response;
        // console.log(response);
        // console.log(response.data);
        // this.product = response.data;
      }, (error) => {
        console.log('getTraining Fail');
        console.log(error);
        return null;
      }
    );
  }

  onDeleteTrainingProgram(id: string) {
    this.trainingProgramService.deleteTrainingProgram(id).subscribe(
      (result) => {
        // Xử lý kết quả trả về từ API (nếu cần)
        console.log('Delete Successfully');
        this.getTraining()
      }, (error) => {
        console.log('Delete Fail');
        console.log(error);
        return null;
      }

    )

  };
  onUpdateTrainingProgram(): void {
    const updateId = '3fa85f64-5717-4562-b3fc-2c963f66afa6';
    console.log('updateId:', updateId);
    const body = {
      programName: 'New Program Name',
      syllabusesId: [
        '3fa85f64-5717-4562-b3fc-2c963f66afa6'
      ],
      id: '3fa85f64-5717-4562-b3fc-2c963f66afa6'
    };
    this.trainingProgramService.updateTrainingProgram(updateId, body)
      .subscribe(
        response => console.log(response),
        error => console.error(error)
      );
  }



  onDuplicateTrainingProgram(id: string) {
    this.trainingProgramService.DuplicateTrainingProgram(id).subscribe(
      (result) => {
        // Xử lý kết quả trả về từ API (nếu cần)

        console.log('duplicate Successfully');
        this.getTraining()
      }, (error) => {
        console.log('duplicate Fail');
        console.log(error);
        return null;
      }

    )

  };
  onSearchTrainingProgram() {
    this.startSpin = true;
    console.log('Search: ');
    console.log(this.Keysearch);
    this.trainingProgramService.searchTrainingProgram(this.Keysearch).subscribe(
      (res: any) => {
        console.log('Search Successfully');
        this.product = res;
        this.startSpin = false;
      },
      (error) => {
        console.log('Search Fail');
        console.log(error);
        this.startSpin = false;

      }
    );
  }


  // onUpdateTrainingProgram(id: string) {
  //   this.trainingProgramService.updateTrainingProgram(id).subscribe(
  //     (result) => {
  //       // Xử lý kết quả trả về từ API (nếu cần)
  //       console.log('update Successfully');
  //       this.getTraining()
  //     }, (error) => {
  //       console.log('update Fail');
  //       console.log(error);
  //       return null;
  //     }
  //   )
  // };













  toggleFilterForm() {
    this.showFilterForm = !this.showFilterForm;
  }

  toggleAdd() {
    this.router.navigate(['/training/view/add'])
  }
  toggleImport() {
    this.router.navigate(['/training/view/import'])
  }

  toggleTrainingId(id: string) {
    this.router.navigate(['/training/view/training-detail'], {
      queryParams: { id: id },
    })
  }


  public filterForm!: FormGroup;
  ngOnInit() {
    this.primengConfig.ripple = true;
    this.getTraining()
  }
  public createName() {
    console.log(JSON.stringify(this.profileForm.value));
  }

  public onSubmit() { }

  onReset() {

    this.filterForm.reset();
  }



  displayBasic: boolean | undefined;

  openFilter() {
    // logic của hàm openFilter ở đây
  }


  showBasicDialog() {
    this.displayBasic = true;
  }
  onMenuItemChange(event: any) {
    const selectedMenuItem = event.value;

    if (selectedMenuItem === 'add') {
      // Thực hiện hành động thêm mới
    } else if (selectedMenuItem === 'edit') {
      // Thực hiện hành động sửa
    } else if (selectedMenuItem === 'delete') {
      // Thực hiện hành động xóa
    }
  }


  // menuItems = [
  //   // { label: 'Manage', command: () => this.manage() },
  //   { label: 'Training material', command: () => this.trainingMaterial() },
  //   { label: 'Edit program', command: () => this.editProgram() },
  //   { label: 'Duplicate program', command: () => this.duplicateProgram() },
  //   { label: 'De-activate program', command: () => this.deactivateProgram() },
  //   { label: 'Delete program', command: () => this.deleteProgram() }
  // ];

  // manage() {
  //   console.log('Manage');
  // }

  trainingMaterial() {
    console.log('Training material');
  }

  editProgram() {
    console.log('Edit program');
  }

  duplicateProgram() {
    console.log('Duplicate program');
  }

  deactivateProgram() {
    console.log('De-activate program');
  }

  deleteProgram(product) {
    console.log(product.id);

  }

}


