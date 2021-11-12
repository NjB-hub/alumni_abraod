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
import { PasswordDirective } from './directives/password.directive';
import { AuthGuardService } from './services/auth-guard.service';
import { FooterComponent } from './footer/footer.component';
import { CvComponent } from './cvFolder/cv/cv.component';
import { CvExpertiseItemComponent } from './cvFolder/cv-expertise-item/cv-expertise-item.component';

const appRoutes: Routes = [
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'home',/* canActivate: [AuthGuardService]*/ component: HomeComponent }, //canActivate for app protection when not signed in
  { path: 'index', component: IndexComponent },
  { path: 'forgotpassword', component: ForgotPasswordComponent },
  { path: 'not-found', component: FourOhFourComponent },
  { path: 'backuppassword', component: BackuppasswordComponent },
  { path: 'cv', component: CvComponent },
  { path: '', component: IndexComponent },
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
    BackuppasswordComponent,
    FooterComponent,
    PasswordDirective,
    CvComponent,
    CvExpertiseItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
],
  providers: [AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
