import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core-component/auth/services';
import { LoginDemoService } from '../services/login-demo-service.service';


@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.scss']
})
export class RecoverPasswordComponent {
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
    this.recover = this.formBuilder.group({
      code:['',[Validators.required, Validators.minLength(2)]],
      newPassword: ['', [Validators.required, Validators.minLength(2)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(2)]],
    });
  }
  public recover!: FormGroup;
  onSubmit() {
    if (this.recover.valid) {

      this.getRecover();
    } else {
      console.log('wrong format');
      // alert('Fail' + JSON.stringify(this.login.get('userName')?.errors));
      this.emailError = this.recover.get('userName')?.errors;
    }
    return false;
  }
  getRecover() {
    this.startSpin = true;
    this.getLoginService.getRecover(this.recover.value).subscribe(
      (data) => {
        console.log('Success');
        this.router.navigateByUrl('/login');
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
