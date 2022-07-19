import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { SignupComponent } from './signup/signup.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SigninComponent } from './signin/signin.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { BackuppasswordComponent } from './backuppassword/backuppassword.component';
import { PasswordDirective } from '../directives/password.directive';



@NgModule({
  declarations: [
    AuthComponent,
    SignupComponent,
    SigninComponent,
    ForgotPasswordComponent,
    BackuppasswordComponent,
    PasswordDirective,
    ResetpasswordComponent
  ],

  imports: [
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthRoutingModule
  ],

  providers: []
})
export class AuthModule { }
