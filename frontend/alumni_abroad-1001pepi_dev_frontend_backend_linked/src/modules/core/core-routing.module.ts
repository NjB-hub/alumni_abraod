import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from '../../modules/auth/services/auth-guard.service';
import { AdminGuardService } from '../auth/services/admin-guard.service';
import { ProfileComponent } from '../m-profile/profile/profile.component';
import { CoreComponent } from './core.component';

const routes: Routes = [
  { path: '', component: CoreComponent,
    children: [
      { path: '', redirectTo: "feed"},
      { path: 'feed',loadChildren: () => import('../feed/feed.module').then(m => m.FeedModule)},
      { path: 'search',loadChildren: () => import('../search/search.module').then(m => m.SearchModule)},
      { path: 'notifications', loadChildren: () => import('../notifications/notifications.module').then(m => m.NotificationsModule) },
      { path: 'calendar', loadChildren: () => import('../m-calendar/m-calendar.module').then(m => m.MCalendarModule) },
      { path: 'profile', loadChildren: () => import('../m-profile/m-profile.module').then(m => m.MProfileModule) },
      { path: 'users',
        children: [
          {path:'', redirectTo:'profile'},
          {path:':id',component: ProfileComponent}
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
