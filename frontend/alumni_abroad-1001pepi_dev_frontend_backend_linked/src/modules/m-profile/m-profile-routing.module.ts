import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MProfileComponent } from './m-profile.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileFormComponent } from './profile-form/profile-form.component';
import { CvComponent } from './cv/cv.component';
import { CvFormComponent } from './cv-form/cv-form.component';

const routes: Routes = [
  { path: '', component: MProfileComponent,
    children: [
      { path:'', redirectTo:'viewprofile'},
      { path: 'viewprofile', component: ProfileComponent },
      { path: 'modifyprofile', component: ProfileFormComponent },
      { path: 'viewcv', component: CvComponent },
      { path: 'modifycv', component: CvFormComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MProfileRoutingModule { }
