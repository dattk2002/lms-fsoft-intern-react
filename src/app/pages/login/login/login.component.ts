import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core-component/auth/services';
import { LoginDemoService } from '../services/login-demo-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  visible: boolean = true;
  changetype: boolean = true;
  emailError: any;
  displayBasic: boolean;
  diaLog: any;
  startSpin: boolean = false;

  viewpass() {
    this.visible = !this.visible;
    this.changetype = !this.changetype;
  }
  loggedIn = false;

  constructor(
    private formBuilder: FormBuilder,
    private getLoginService: LoginDemoService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.login = this.formBuilder.group({
      userName: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(2)]],
    });
  }

  public login!: FormGroup;

  onSubmit() {
    if (this.login.valid) {
      console.log('success');
      this.getLogin();
    } else {
      console.log('wrong format');
      // alert('Fail' + JSON.stringify(this.login.get('userName')?.errors));
      this.emailError = this.login.get('userName')?.errors;
    }
    return false;
  }

  getLogin() {
    this.startSpin = true;
    this.getLoginService.getLogin(this.login.value).subscribe(
      (data) => {
        console.log('Success');
        console.log(data);
        console.log(JSON.stringify(data));
        localStorage.setItem('token', data.accessToken);
        this.router.navigateByUrl('/home');
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
