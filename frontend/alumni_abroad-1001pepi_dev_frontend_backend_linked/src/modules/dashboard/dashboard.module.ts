import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MainComponent } from './main/main.component';
import { UserListComponent } from './user-list/user-list.component';
import { RequestListComponent } from './request-list/request-list.component';
import { ReportListComponent } from './report-list/report-list.component';
import { StatisticComponent } from './statistic/statistic.component';
import { StatCardComponent } from './stat-card/stat-card.component';
import { NumberCircleComponent } from './number-circle/number-circle.component';
import { ResultUserListComponent } from './result-user-list/result-user-list.component';
import { ResultUserListItemComponent } from './result-user-list-item/result-user-list-item.component';
import { RequestListItemComponent } from './request-list-item/request-list-item.component';
import { RequestDialogComponent } from './request-dialog/request-dialog.component';

//Angular material for log out dialog
import {MatDialogModule} from '@angular/material/dialog';
import { ReportDialogComponent } from './report-dialog/report-dialog.component';
import { ReportListItemComponent } from './report-list-item/report-list-item.component';
import { LogOutDialogComponent } from './log-out-dialog/log-out-dialog.component';


import { GenericStatCardComponent } from './generic-stat-card/generic-stat-card.component';
import { HelpComponent } from './help/help.component';
import { DashboardUserGuideComponent } from './dashboard-user-guide/dashboard-user-guide.component';
import { BugsReportedComponent } from './bugs-reported/bugs-reported.component';
import { SupportComponent } from './support/support.component';
import { DeveloperCardComponent } from './developer-card/developer-card.component';

@NgModule({
  declarations: [
    DashboardComponent,
    MainComponent,
    UserListComponent,
    RequestListComponent,
    ReportListComponent,
    StatisticComponent,
    StatCardComponent,
    NumberCircleComponent,
    ResultUserListComponent,
    ResultUserListItemComponent,
    RequestListItemComponent,
    RequestDialogComponent,
    ReportDialogComponent,
    ReportListItemComponent,
    LogOutDialogComponent,
    GenericStatCardComponent,
    HelpComponent,
    DashboardUserGuideComponent,
    BugsReportedComponent,
    SupportComponent,
    DeveloperCardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatDialogModule,
  ]
})
export class DashboardModule { }
