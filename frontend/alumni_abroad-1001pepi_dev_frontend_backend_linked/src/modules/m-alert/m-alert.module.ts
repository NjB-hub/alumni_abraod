import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAlertComponent } from './m-alert.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap'; 

@NgModule({
  declarations: [
    MAlertComponent
  ],
  exports:[
    MAlertComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    NgbAlertModule 

  ]
})
export class MAlertModule { }
