import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthService } from '../modules/auth/services/auth.service';

import { AppComponent } from './app.component';
import { IndexComponent } from '../modules/index/index.component';
import { NavIndexComponent } from '../modules/nav-index/nav-index.component';
import { FourOhFourComponent } from '../modules/four-oh-four/four-oh-four.component';
import { FooterIndexComponent } from '../modules/footer-index/footer-index.component';
import { AuthGuardService } from '../modules/auth/services/auth-guard.service';
import { AdminGuardService } from 'src/modules/auth/services/admin-guard.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    NavIndexComponent,
    FourOhFourComponent,
    FooterIndexComponent,
  ],
  exports: [
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  
  providers: [AuthService, AuthGuardService, AdminGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
