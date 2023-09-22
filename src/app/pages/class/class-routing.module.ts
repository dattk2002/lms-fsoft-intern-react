import { CreateClassAddSyllabusComponent } from './create-class/create-class-add-syllabus/create-class-add-syllabus.component';
import { CreateClassAddProgramComponent } from './create-class/create-class-add-program/create-class-add-program.component';
import { ViewClassComponent } from './view-class/view-class.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateClassComponent } from './create-class/create-class.component';
import { CreateClassAddNameComponent } from './create-class/create-class-add-name/create-class-add-name.component';
import { CreateClassAddInfoComponent } from './create-class/create-class-add-info/create-class-add-info.component';
import { CreateClassAddTrainerComponent } from './create-class/create-class-add-trainer/create-class-add-trainer.component';
import { ClassDetailComponent } from './view-class/class-detail/class-detail.component';

const routes: Routes = [
  {
    path: '',
    component: ViewClassComponent,
  },
  {
    path: 'view',
    children: [
      {
        path: '',
        component: ViewClassComponent,
      },
      {
        // need id param
        path: 'detail',
        component: ClassDetailComponent,
      },
    ],
  },
  {
    path: 'create',
    children: [
      {
        path: '',
        component: CreateClassComponent,
      },
      {
        path: 'add-name',
        component: CreateClassAddNameComponent,
      },
      {
        path: 'add-program',
        component: CreateClassAddProgramComponent,
      },
      {
        path: 'add-info',
        component: CreateClassAddInfoComponent,
      },
      {
        path: 'add-trainer',
        component: CreateClassAddTrainerComponent,
      },
      {
        path: 'add-syllabus',
        component: CreateClassAddSyllabusComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClassRoutingModule {}
