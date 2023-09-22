import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { FullCalendarModule } from '@fullcalendar/angular';
//Material

import { TrainingCalendarRoutingModule } from './training-calendar-routing.module';
import { TrainingCalendarComponent } from './training-calendar/training-calendar.component';
import { TrainingCalendarSearchFilterComponent } from './training-calendar/training-calendar-search-filter/training-calendar-search-filter.component';
import { TrainingCalendarViewingComponent } from './training-calendar/training-calendar-viewing/training-calendar-viewing.component';
import { TrainingCalendarFullcalendarComponent } from './training-calendar/training-calendar-fullcalendar/training-calendar-fullcalendar.component';
import { TrainingCalendarByWeekComponent } from './training-calendar/training-calendar-by-week/training-calendar-by-week.component';
import { TrainingCalendarViewingWeekComponent } from './training-calendar/training-calendar-viewing-week/training-calendar-viewing-week.component';
//Component



//Calendar Module
import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

// import { TrainingCalendarFullcalendarUtilsComponent } from './training-calendar/training-calendar-fullcalendar-utils/training-calendar-fullcalendar-utils.component';


@NgModule({
  declarations: [
    TrainingCalendarComponent,
    TrainingCalendarSearchFilterComponent,
    TrainingCalendarViewingComponent,
    TrainingCalendarFullcalendarComponent,
    TrainingCalendarByWeekComponent,
    TrainingCalendarViewingWeekComponent,

  ],
  imports: [
    SharedModule,
    CommonModule,
    TrainingCalendarRoutingModule,
    DialogModule,
    FormsModule,
    ReactiveFormsModule,
    FullCalendarModule,
    NgbModalModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),

  ],
})
export class TrainingCalendarModule {}
