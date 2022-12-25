import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MCalendarComponent } from './m-calendar.component';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { EventCardComponent } from './event-card/event-card.component';

const routes: Routes = [
  { path: '', component: MCalendarComponent,
    children: []
  }
];

@NgModule({
  declarations: [
    MCalendarComponent,
    CalendarComponent,
    EventCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],

  exports: [RouterModule]
})
export class MCalendarModule { }
