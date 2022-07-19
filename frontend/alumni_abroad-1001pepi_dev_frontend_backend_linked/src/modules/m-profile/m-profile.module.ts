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



@NgModule({
  declarations: [
    MProfileComponent,
    ProfileComponent,
    ProfileFormComponent,
    CvComponent,
    CvExpertiseItemComponent,
    CvFormComponent,
    EducationItemComponent,
    ExperienceItemComponent
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
