import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IndentifyMailComponent } from './indentify-mail/indentify-mail.component';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import {DialogModule} from 'primeng/dialog';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    LoginComponent,
    IndentifyMailComponent,
    RecoverPasswordComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DialogModule,
    SharedModule
  ]
})
export class LoginModule { }
