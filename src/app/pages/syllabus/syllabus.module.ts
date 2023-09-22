import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CreateSyllabusComponent } from './create-syllabus/create-syllabus.component';
import { SyllabusRoutingModule } from './syllabus-routing.module';
import { ViewSyllabusComponent } from './view-syllabus/view-syllabus.component';
import { SyllabusPageComponent } from './syllabus-page/syllabus-page.component';
import { SyllabusDetailComponent } from './syllabus-detail/syllabus-detail.component';
import { SyllabusTitleComponent } from './syllabus-title/syllabus-title.component';
import { CreatSyllabusGeneralComponent } from './create-syllabus/creat-syllabus-general/creat-syllabus-general.component';
import { EditorModule } from 'primeng/editor';
import { ListOfSyllabusComponent } from './list-of-syllabus/list-of-syllabus.component';
import { SyllabusDetailOthersComponent } from './syllabus-detail/syllabus-detail-others/syllabus-detail-others.component';
import { SyllabusDetailGeneralComponent } from './syllabus-detail/syllabus-detail-general/syllabus-detail-general.component';
import {TabViewModule} from 'primeng/tabview';

//primeng
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { DialogModule } from 'primeng/dialog';
import { TagModule } from 'primeng/tag';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ChartModule } from 'primeng/chart';
import { CreateSyllabusOutlineComponent } from './create-syllabus/create-syllabus-outline/create-syllabus-outline.component';
import { CreateSyllabusOthersComponent } from './create-syllabus/create-syllabus-others/create-syllabus-others.component';
import { AccordionModule } from 'primeng/accordion';
import { EditSyllabusComponent } from './edit-syllabus/edit-syllabus.component';


@NgModule({
  declarations: [
    ViewSyllabusComponent,
    CreateSyllabusComponent,
    SyllabusPageComponent,
    SyllabusDetailComponent,
    SyllabusTitleComponent,
    CreatSyllabusGeneralComponent,
    ListOfSyllabusComponent,
    SyllabusDetailOthersComponent,
    SyllabusDetailGeneralComponent,
    CreateSyllabusOutlineComponent,
    CreateSyllabusOthersComponent,
    EditSyllabusComponent,


  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
    DialogModule,
    TagModule,
    ScrollPanelModule,
    ChartModule,
    NgApexchartsModule,
    SyllabusRoutingModule,
    EditorModule,
    TabViewModule,
    AccordionModule

  ],
  exports: [],
  providers: [],
  bootstrap: [SyllabusPageComponent],
})
export class SyllabusModule {}
