import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  SelectItem,
  PrimeNGConfig,
  MessageService,
  Message,
} from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-import-dialog',
  templateUrl: './import-dialog.component.html',
  styleUrls: ['./import-dialog.component.scss'],
  providers: [MessageService],
})
export class ImportDialogComponent {
  uploadedFiles: any[] = [];
  selectedCategory: any = null;
  submitted: boolean = false;
  messages: Message[];

  categories: any[] = [
    { name: 'Allow', key: 'A' },
    { name: 'Replace', key: 'R' },
    { name: 'Skip', key: 'S' },
  ];

  type!: any[];
  seperator!: any[];
  seperators;
  acceptedFiles: any = '.xlsx';
  public importForm!: FormGroup;

  scans = [
    { label: 'Fullname', value: 'Fullname' },
    { label: 'User email', value: 'User email' },
  ];

  constructor(
    private primengConfig: PrimeNGConfig,
    private formBuilder: FormBuilder,
    private router: Router,
    private messageService: MessageService
  ) {
    // this.seperators = new FormControl();

    this.type = [
      { name: 'UTF-*', code: 'UTF' },
      { name: 'EBCDIC', code: 'EBCDIC' },
      { name: 'ASCII', code: 'ASCII' },
    ];
    this.seperator = [
      { name: 'By Comma', code: 'comma' },
      { name: 'By Tab', code: 'tab' },
      { name: 'By Semicolon', code: 'semicolon' },
      { name: 'Space', code: 'space' },
      { name: 'Other', code: 'other' },
    ];
    // this.seperators.value = ['By Comma'];
    // console.log(this.seperators)
  }
  ngOnInit() {
    this.primengConfig.ripple = true;
    this.selectedCategory = this.categories[1];
    this.importForm = this.formBuilder.group({
      selectedTypes: [[], [Validators.required]],
      selectedSeperators: [[], [Validators.required]],
      selectedScan: [null, [Validators.required]],
      selectedDuplicate: [],
    });
  }
  submitImport = (event: any) => {
    event.preventDefault(); //khong tai lai trang
    // document.querySelector('#testing-request-json')!.innerHTML = JSON.stringify(
    //   this.importForm.value

    // );
    console.log(this.importForm.value);
  };
  public onSubmit() {}

  onReset() {
    this.submitted = false;
    this.importForm.reset();

    // this.router.navigate(['/class']);
  }

  // onUpload(event) {
  //   console.log('jjjjjjjjjjjjjjjjj');

  //   this.messages = [{ severity: 'success', summary: 'Success', detail: 'Upload File Successfully!!!' }];
  //   // this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode' });
  //   // this.messages = [{ severity: 'failed', summary: 'Failed', detail: 'Upload File Failed!!!' }];
  // }
  // myUploader(event) {
  //   this.messages = [{ severity: 'success', summary: 'Success', detail: 'Upload File Successfully!!!' }];
  //   console.log(event);
  // }

  myUploader(event: any) {
    console.log('Imported Success');

    console.log(event);

    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'File Uploaded Successfully!!!',
    });
  }

  uploadError(event: any) {
    console.log('Import Error!!!');
    console.log(event);
    if (event) {
      let msg = '';
      if (event.error) msg = event.error.error;
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: msg,
      });
    }
  }

  // errorUploader(event) {
  //   this.messageService.add({ severity: 'error', summary: 'Error', detail: 'File Uploaded Failed!!!' });
  // }

  btnReset = 'Clear';
  btnSearch = 'Search';
}
