import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

import { LearningMaterialsRoutingModule } from './learning-materials-routing.module';
import { LearningMaterialsComponent } from './learning-materials/learning-materials.component';


@NgModule({
  declarations: [
    LearningMaterialsComponent
  ],
  imports: [
    CommonModule,
    LearningMaterialsRoutingModule,
    ButtonModule,
  ]
})
export class LearningMaterialsModule { }
