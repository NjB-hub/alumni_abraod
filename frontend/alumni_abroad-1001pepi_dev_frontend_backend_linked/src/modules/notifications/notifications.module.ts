import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationsComponent } from './notifications.component';
import { RouterModule, Routes } from '@angular/router';
import { NotificationsListComponent } from './notifications-list/notifications-list.component';
import { NotificationsListItemComponent } from './notifications-list-item/notifications-list-item.component';

const routes: Routes = [
  { path: '', component: NotificationsComponent,
    children: []
  }
];

@NgModule({
  declarations: [
    NotificationsComponent,
    NotificationsListComponent,
    NotificationsListItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],

  exports: [RouterModule]
})
export class NotificationsModule { }
