import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { ClassRoutingModule } from './class-routing.module';

import { ViewClassComponent } from './view-class/view-class.component';
import { CreateClassComponent } from './create-class/create-class.component';
import { ClassHeaderComponent } from './create-class/class-header/class-header.component';
import { CreateClassAddInfoComponent } from './create-class/create-class-add-info/create-class-add-info.component';
import { CreateClassAddNameComponent } from './create-class/create-class-add-name/create-class-add-name.component';
import { CreateClassAddProgramComponent } from './create-class/create-class-add-program/create-class-add-program.component';
import { CreateClassAddSyllabusComponent } from './create-class/create-class-add-syllabus/create-class-add-syllabus.component';
import { CreateClassAttendeeComponent } from './create-class/create-class-attendee/create-class-attendee.component';
import { CreateClassGeneralComponent } from './create-class/create-class-general/create-class-general.component';
import { CreateClassTimeFrameComponent } from './create-class/create-class-time-frame/create-class-time-frame.component';
import { CreateClassTrainingProgramComponent } from './create-class/create-class-training-program/create-class-training-program.component';
import { CreateClassViewSyllabusComponent } from './create-class/create-class-view-syllabus/create-class-view-syllabus.component';


// PrimeNG
import { MenuModule } from 'primeng/menu';
import {PickListModule} from 'primeng/picklist';
import { ClassDetailComponent } from './view-class/class-detail/class-detail.component';
// Joyride
import { JoyrideModule } from 'ngx-joyride';
import { CreateClassAddTrainerComponent } from './create-class/create-class-add-trainer/create-class-add-trainer.component';

import {PaginatorModule} from 'primeng/paginator';
@NgModule({
  declarations: [
    ViewClassComponent,
    CreateClassComponent,
    CreateClassAddSyllabusComponent,
    ViewClassComponent,
    CreateClassComponent,
    ClassHeaderComponent,
    CreateClassAddInfoComponent,
    CreateClassAddNameComponent,
    CreateClassAddProgramComponent,
    CreateClassAddSyllabusComponent,
    CreateClassAttendeeComponent,
    CreateClassGeneralComponent,
    CreateClassTimeFrameComponent,
    CreateClassTrainingProgramComponent,
    CreateClassViewSyllabusComponent,
    ClassDetailComponent,
    CreateClassAddTrainerComponent
  ],
  imports: [
    SharedModule,
    ClassRoutingModule,
    MenuModule,
    PickListModule,
    JoyrideModule.forRoot(),
    PaginatorModule,
  ],
})
export class ClassModule {

}
