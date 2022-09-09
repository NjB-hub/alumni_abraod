import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './core.component';
import { NavCoreComponent } from './nav-core/nav-core.component';
import { LogOutDialogComponent } from './log-out-dialog/log-out-dialog.component';


//Angular material for log out dialog
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    CoreComponent,
    NavCoreComponent,
    LogOutDialogComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    MatDialogModule
  ]
})
export class CoreModule { }
