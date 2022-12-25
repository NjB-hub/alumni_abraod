import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MProfileComponent } from './m-profile.component';
import { MProfileRoutingModule } from './m-profile-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { ProfileFormComponent } from './profile-form/profile-form.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CvComponent } from './cv/cv.component';
import { CvExpertiseItemComponent } from './cv-expertise-item/cv-expertise-item.component';
import { CvFormComponent } from './cv-form/cv-form.component';
import { EducationItemComponent } from './education-item/education-item.component';
import { ExperienceItemComponent } from './experience-item/experience-item.component';
import { ExperienceListComponent } from './experience-list/experience-list.component';
import { ExperienceListItemComponent } from './experience-list-item/experience-list-item.component';
import { EducationListComponent } from './education-list/education-list.component';
import { EducationListItemComponent } from './education-list-item/education-list-item.component';
import { CertificationListComponent } from './certification-list/certification-list.component';
import { CertificationListItemComponent } from './certification-list-item/certification-list-item.component';



@NgModule({
  declarations: [
    MProfileComponent,
    ProfileComponent,
    ProfileFormComponent,
    CvComponent,
    CvExpertiseItemComponent,
    CvFormComponent,
    EducationItemComponent,
    ExperienceItemComponent,
    ExperienceListComponent,
    ExperienceListItemComponent,
    EducationListComponent,
    EducationListItemComponent,
    CertificationListComponent,
    CertificationListItemComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MProfileRoutingModule
  ]
})
export class MProfileModule { }
