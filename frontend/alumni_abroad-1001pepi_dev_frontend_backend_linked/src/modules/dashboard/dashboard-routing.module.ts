import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { MainComponent } from './main/main.component';
import { ReportListComponent } from './report-list/report-list.component';
import { RequestListComponent } from './request-list/request-list.component';
import { StatisticComponent } from './statistic/statistic.component';
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
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
