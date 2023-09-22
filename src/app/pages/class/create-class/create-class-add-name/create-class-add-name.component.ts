import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-create-class-add-name',
  templateUrl: './create-class-add-name.component.html',
  styleUrls: ['./create-class-add-name.component.scss'],
})
export class CreateClassAddNameComponent {
  bigTitle = '';
  public nameForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.nameForm = this.formBuilder.group({
      nameValue: ['', [Validators.required]],
      loginToken: [''],
    });
  }

  className() {
    console.log(JSON.stringify(this.nameForm.value.nameValue));
    localStorage.setItem(
      'className',
      JSON.stringify(this.nameForm.value.nameValue)
    );
    this.router.navigate(['/class/create/add-program'])
  }
}
