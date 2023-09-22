import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewProgramComponent } from './view-program/view-program.component';
import { CreateProgramComponent } from './create-program/create-program.component';
import { TrainingDetailComponent } from './view-program/training-detail/training-detail.component';
import { Children } from 'preact/compat';
import { CreateTrainingProgramNameComponent } from './create-program/create-training-program-name/create-training-program-name.component';
import { CreateTrainingProgramGeneralComponent } from './create-program/create-training-program-general/create-training-program-general.component';
import { CreateTrainingProgramSyllabusComponent } from './create-program/create-training-program-syllabus/create-training-program-syllabus.component';
import { ImportDialogComponent } from 'src/app/shared/components/import-dialog/import-dialog.component';
import { SyllabusDetailOutlineComponent } from 'src/app/shared/components';

const routes: Routes = [
{
  path: '',
        component: ViewProgramComponent
},
  {
    path: 'view',


    children: [
      {
        path: '',
        component: ViewProgramComponent
      },
      {
        path: 'training-detail',
        component: TrainingDetailComponent,

      },
      {
        path: 'add',
        component: CreateProgramComponent,

      },
      // {
      //   path: 'import',
      //   component: ImportDialogComponent,

      // },
      {
        path: 'material',
        component: SyllabusDetailOutlineComponent,

      },
    ]
  },

  {
    path: 'create',
    children: [
      {
        path: '',
        component: CreateTrainingProgramNameComponent,
      },
      {
        path: 'general',
        component: CreateTrainingProgramGeneralComponent,
      },
      {
        path: 'syllabus',
        component: CreateTrainingProgramSyllabusComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainingRoutingModule { }
