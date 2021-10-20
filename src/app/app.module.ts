import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './auth/signup/signup.component';

import { AuthService } from './services/auth.service';
import { SigninComponent } from './auth/signin/signin.component';

import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent }
];


@NgModule({
  declarations: [
    AppComponent, 
    NavComponent,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
