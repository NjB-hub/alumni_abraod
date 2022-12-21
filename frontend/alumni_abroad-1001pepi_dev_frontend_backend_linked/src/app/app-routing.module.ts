import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from '../modules/auth/services/auth-guard.service';
import { AdminGuardService} from '../modules/auth/services/admin-guard.service'
import { FourOhFourComponent } from '../modules/four-oh-four/four-oh-four.component';

import { IndexComponent } from '../modules/index/index.component';

const routes: Routes = [
  { path: '', component: IndexComponent },

  { path: 'auth', loadChildren: () => import('../modules/auth/auth.module').then(m => m.AuthModule) },

  { path: 'core', canActivate: [AuthGuardService],loadChildren: () => import('../modules/core/core.module').then(m => m.CoreModule) },

  { path: 'dashboard', canActivate: [AuthGuardService, AdminGuardService], loadChildren: () => import('../modules/dashboard/dashboard.module').then(m => m.DashboardModule) },

  { path: 'not-found', component: FourOhFourComponent },
  
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
