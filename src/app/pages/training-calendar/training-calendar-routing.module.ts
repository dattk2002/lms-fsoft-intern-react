import { TrainingCalendarComponent } from './training-calendar/training-calendar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainingCalendarByWeekComponent } from './training-calendar/training-calendar-by-week/training-calendar-by-week.component';

const routes: Routes = [
  {
    path: '',
    component: TrainingCalendarComponent
  },
  {
    path: 'day',
    component: TrainingCalendarComponent,
    children: [
      {
        path: 'week',
        component: TrainingCalendarByWeekComponent,
      }
    ]
  },
  {
    path: 'week',
    component: TrainingCalendarByWeekComponent,
    children: [
      {
        path: 'day',
        component: TrainingCalendarComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainingCalendarRoutingModule { }
