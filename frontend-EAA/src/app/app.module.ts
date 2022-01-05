import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthService } from './services/auth.service';

import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { HomeComponent } from './feedFolder/home/home.component';
import { IndexComponent } from './index/index.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { NavHomeComponent } from './nav-home/nav-home.component';
import { NavIndexComponent } from './nav-index/nav-index.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { FooterIndexComponent } from './footer-index/footer-index.component';
import { BackuppasswordComponent } from './auth/backuppassword/backuppassword.component';
import { PasswordDirective } from './directives/password.directive';
import { AuthGuardService } from './services/auth-guard.service';
import { CvComponent } from './cvFolder/cv/cv.component';
import { CvExpertiseItemComponent } from './cvFolder/cv-expertise-item/cv-expertise-item.component';
import { EducationItemComponent } from './cvFolder/education-item/education-item.component';
import { ExperienceItemComponent } from './cvFolder/experience-item/experience-item.component';
import { PostListComponent } from './feedFolder/post-list/post-list.component';
import { PostListItemComponent } from './feedFolder/post-list-item/post-list-item.component';
import { NotificationsComponent } from './notificationsFolder/notifications/notifications.component';
import { NotificationsListComponent } from './notificationsFolder/notifications-list/notifications-list.component';
import { NotificationsListItemComponent } from './notificationsFolder/notifications-list-item/notifications-list-item.component';
import { SearchComponent } from './searchFolder/search/search.component';
import { CalendarComponent } from './feedFolder/calendar/calendar.component';
import { CalendarContainerComponent } from './feedFolder/calendar-container/calendar-container.component';
import { ResultListComponent } from './searchFolder/result-list/result-list.component';
import { ResultListItemComponent } from './searchFolder/result-list-item/result-list-item.component';
import { PublishOfferComponent } from './feedFolder/publish-offer/publish-offer.component';
//import { NavHomeService } from './services/nav-home.service';
import { ProfileComponent } from './profile/profile.component';
import { CvFormComponent } from './cvFolder/cv-form/cv-form.component';
import { ProfileFormComponent } from './profile-form/profile-form.component';


const appRoutes: Routes = [
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'settings/viewprofile', component: ProfileComponent },
  { path: 'settings/modifyprofile', component: ProfileFormComponent },
  { path: 'settings/viewcv', component: CvComponent },
  { path: 'settings/modifycv', component: CvFormComponent },
  { path: 'feed',/* canActivate: [AuthGuardService]*/ component: HomeComponent }, //canActivate for app protection when not signed in
  { path: 'index', component: IndexComponent },
  { path: 'feed/publish:offer', component: PublishOfferComponent },
  { path: 'forgotpassword', component: ForgotPasswordComponent },
  { path: 'not-found', component: FourOhFourComponent },
  { path: 'backuppassword', component: BackuppasswordComponent },
  { path: 'notifications', component: NotificationsComponent },
  { path: 'search', component: SearchComponent },
  { path: 'cv', component: CvComponent },
  { path: 'calendar', component: CalendarContainerComponent },
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
    PasswordDirective,
    CvComponent,
    CvExpertiseItemComponent,
    EducationItemComponent,
    ExperienceItemComponent,
    PostListComponent,
    PostListItemComponent,
    NotificationsComponent,
    NotificationsListComponent,
    NotificationsListItemComponent,
    SearchComponent,
    CalendarComponent,
    CalendarContainerComponent,
    ResultListComponent,
    ResultListItemComponent,
    PublishOfferComponent,
    ProfileComponent,
    CvFormComponent,
    ProfileFormComponent
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
