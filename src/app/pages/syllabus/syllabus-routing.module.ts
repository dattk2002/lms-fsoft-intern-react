import { SyllabusDetailComponent } from './syllabus-detail/syllabus-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateSyllabusOutlineComponent } from './create-syllabus/create-syllabus-outline/create-syllabus-outline.component';
import { CreateSyllabusComponent } from './create-syllabus/create-syllabus.component';
import { ViewSyllabusComponent } from './view-syllabus/view-syllabus.component';

const routes: Routes = [
  {
    path: '',
    component: ViewSyllabusComponent
  },
  {
    path: 'view-syllabus',
    component: ViewSyllabusComponent
  },
  {
    path: 'syllabus-detail',
    component: SyllabusDetailComponent
  },
  {
    path: 'create-syllabus',
    component: CreateSyllabusComponent
  },
  {
    path: 'create-syllabus-outline',
    component: CreateSyllabusOutlineComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SyllabusRoutingModule { }
