import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

import { TrainingRoutingModule } from './training-routing.module';
import { ViewProgramComponent } from './view-program/view-program.component';
import { CreateProgramComponent } from './create-program/create-program.component';
import { TrainingDetailComponent } from './view-program/training-detail/training-detail.component';
import { CreateTrainingProgramNameComponent } from './create-program/create-training-program-name/create-training-program-name.component';
import { CreateTrainingProgramSyllabusComponent } from './create-program/create-training-program-syllabus/create-training-program-syllabus.component';
import { CreateTrainingProgramGeneralComponent } from './create-program/create-training-program-general/create-training-program-general.component'

// PrimeNG
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { AccordionModule } from 'primeng/accordion';
import { ListOfTrainingProgramComponent } from './view-program/list-of-training-program/list-of-training-program.component';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    ViewProgramComponent,
    CreateProgramComponent,
    TrainingDetailComponent,
    ListOfTrainingProgramComponent,
    CreateTrainingProgramNameComponent,
    CreateTrainingProgramSyllabusComponent,
    CreateTrainingProgramGeneralComponent,


  ],
  imports: [
    SharedModule,
    CommonModule,
    TrainingRoutingModule,
    ScrollPanelModule,
    AccordionModule,
    DialogModule,
    TableModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,



  ],
})
export class TrainingModule {}
