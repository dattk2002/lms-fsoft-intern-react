import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core-component/auth/services';
import { LoginDemoService } from '../services/login-demo-service.service';

@Component({
  selector: 'app-indentify-mail',
  templateUrl: './indentify-mail.component.html',
  styleUrls: ['./indentify-mail.component.scss'],
})
export class IndentifyMailComponent {
  emailError: any;
  startSpin: boolean = false;
  displayBasic: boolean;
  diaLog: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,

    private getLoginService: LoginDemoService
  ) {}

  ngOnInit() {
    this.email = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  public email!: FormGroup;

  onSubmit() {
    if (this.email.valid) {
      // document.querySelector('#login-testing-json-qqgido')!.innerHTML =
      //   JSON.stringify(this.email.value);
      this.getForgot();
    } else {
      // alert('Fail' + JSON.stringify(this.email.get('email')?.errors));
      this.emailError = this.email.get('email')?.errors;
    }

    return false;
  }
  getForgot() {
    this.startSpin = true;
    this.getLoginService.getForgot(this.email.value.email).subscribe(
      (data) => {
        console.log('Success');
        this.router.navigateByUrl('/login/recover');
      },
      (error) => {
        console.log('Fail');
        console.log(error.error);
        this.diaLog = error.error;

        this.startSpin = false;
        this.showBasicDialog();
      }
    );
  }
  showBasicDialog() {
    this.displayBasic = true;
  }
}
