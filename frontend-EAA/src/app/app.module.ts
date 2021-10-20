import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthService } from './services/auth.service';

import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { HomeComponent } from './home/home.component';
import { IndexComponent } from './index/index.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { NavHomeComponent } from './nav-home/nav-home.component';
import { NavIndexComponent } from './nav-index/nav-index.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { FooterIndexComponent } from './footer-index/footer-index.component';
import { BackuppasswordComponent } from './backuppassword/backuppassword.component';

const appRoutes: Routes = [
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'home', component: HomeComponent },
  { path: 'index', component: IndexComponent },
  { path: 'forgotpassword', component: ForgotPasswordComponent },
  { path: 'not-found', component: FourOhFourComponent },
  { path: 'backuppassword', component: BackuppasswordComponent },
  { path: '**', redirectTo: 'not-found' }

];


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    HomeComponent,
    IndexComponent,
    ForgotPasswordComponent,
    NavHomeComponent,
    NavIndexComponent,
    FourOhFourComponent,
    FooterIndexComponent,
    BackuppasswordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
