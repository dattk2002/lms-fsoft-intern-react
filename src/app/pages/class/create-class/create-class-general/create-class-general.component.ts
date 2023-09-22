import { PrimeNGConfig } from 'primeng/api';
import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-class-general',
  templateUrl: './create-class-general.component.html',
  styleUrls: ['./create-class-general.component.scss'],
})
export class CreateClassGeneralComponent {
  admins: any[];
  fsu: any[];

  @Input()
  viewMode: string = null;

  @Input()
  generalInformation: any;

  // @Output() generalRequest = new EventEmitter<any>();
  generalInputForm!: FormGroup;

  constructor(
    private primengConfig: PrimeNGConfig,
    private formBuilder: FormBuilder
  ) {
    this.admins = [
      { id: 1, name: 'Thong', email: 'thong@fpt.com' },
      { id: 2, name: 'Dat', email: 'dat@fpt.com' },
    ];
    this.fsu = [
      { id: 1, name: 'fsu1', email: 'fsu1@fpt.com' },
      { id: 2, name: 'fsu2', email: 'fsu2@fpt.com' },
    ];
  }

  ngOnInit() {
    this.generalInputForm = this.formBuilder.group({
      general: this.formBuilder.group({
        class_time: this.formBuilder.group({
          start_time: [null, [Validators.required]],
          end_time: [null, [Validators.required]],
        }),
        location: [null],
        trainer: [null],
        admins: [null],
        fsu: [null],
        selectedFsuContact: [null],
        created: [null],
        review: [null],
        approve: [null],
      }),
    });
  }

  onSubmit() {
    console.log('Submitted');
    console.log(JSON.stringify(this.generalInputForm.value));
    // this.generalRequest.emit(JSON.stringify(this.generalInputForm.value));
    localStorage.setItem(
      'generalRequest',
      JSON.stringify(this.generalInputForm.value)
    );
  }
}
