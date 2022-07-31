import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BugsReportedComponent } from './bugs-reported/bugs-reported.component';
import { DashboardUserGuideComponent } from './dashboard-user-guide/dashboard-user-guide.component';
import { DashboardComponent } from './dashboard.component';
import { HelpComponent } from './help/help.component';
import { MainComponent } from './main/main.component';
import { ReportListComponent } from './report-list/report-list.component';
import { RequestListComponent } from './request-list/request-list.component';
import { StatisticComponent } from './statistic/statistic.component';
import { SupportComponent } from './support/support.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  { path: '', component: DashboardComponent,
    children: [
      { path: '', redirectTo: "main"},
      { path: 'main',component: MainComponent},
      { path: 'users',component: UserListComponent},
      { path: 'signup-requests',component: RequestListComponent},
      { path: 'reports',component: ReportListComponent},
      { path: 'statistics',component: StatisticComponent},
      { path: 'help', component: HelpComponent,
        children:[
          {path:'', redirectTo: "dashboard-user-guide"},
          {path:'dashboard-user-guide', component: DashboardUserGuideComponent},
          {path:'bugs-reported', component: BugsReportedComponent},
          {path:'support', component: SupportComponent},
        ]}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
