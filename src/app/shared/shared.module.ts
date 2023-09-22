import { NgModule } from '@angular/core';
import { CommonModule, DatePipe, DecimalPipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
/* Import Shared Components */
import * as components from '../shared/components';

/* Import Shared Pipes */
import * as pipes from '../shared/pipes';

/* Import Shared Directives */
import * as directives from '../shared/directives';

import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { MultiSelectModule } from 'primeng/multiselect';
import { TableModule } from 'primeng/table';
import { SkeletonModule } from 'primeng/skeleton';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { PanelModule } from 'primeng/panel';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputNumberModule } from 'primeng/inputnumber';
import { TabViewModule } from 'primeng/tabview';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { TooltipModule } from 'primeng/tooltip';
import { CalendarModule } from 'primeng/calendar';
import { FieldsetModule } from 'primeng/fieldset';
import { SliderModule } from 'primeng/slider';
import { ToastModule } from 'primeng/toast';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { InputSwitchModule } from 'primeng/inputswitch';
import { DividerModule } from 'primeng/divider';
import { ChipsModule } from 'primeng/chips';
import { ListboxModule } from 'primeng/listbox';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { AccordionModule } from 'primeng/accordion';
import { ToolbarModule } from 'primeng/toolbar';
import { SplitterModule } from 'primeng/splitter';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ProgressBarModule } from 'primeng/progressbar';
import { TagModule } from 'primeng/tag';
import { BlockUIModule } from 'primeng/blockui';
import { DeferModule } from 'primeng/defer';
import { FileUploadModule } from 'primeng/fileupload';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ColorPickerModule } from 'primeng/colorpicker';
import { BadgeModule } from 'primeng/badge';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { CarouselModule } from 'primeng/carousel';
import { KeyFilterModule } from 'primeng/keyfilter';

import { TreeModule } from 'primeng/tree';
import { VirtualScrollerModule } from 'primeng/virtualscroller';

import { InputMaskModule } from 'primeng/inputmask';

import { SidebarModule } from 'primeng/sidebar';
import { ChartModule } from 'primeng/chart';

import { MetaDataHeaderComponent } from './components/meta-data-header/meta-data-header.component';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { PickListModule } from 'primeng/picklist';
import { MenuModule } from 'primeng/menu';
import { ImportDialogUserComponent } from './components/import-dialog/import-dialog-user/import-dialog-user.component';
import { ImportDialogTrainingProgramComponent } from './components/import-dialog/import-dialog-training-program/import-dialog-training-program.component';
import { UserListComponent } from './components/tablelist/user-list/user-list.component';


const PRIMENG_DEPENDENCIES = [
  RippleModule,
  ButtonModule,
  MultiSelectModule,
  TableModule,
  SkeletonModule,
  BreadcrumbModule,
  PanelModule,
  CardModule,
  InputTextModule,
  CheckboxModule,
  RadioButtonModule,
  DropdownModule,
  InputTextareaModule,
  InputNumberModule,
  TabViewModule,
  DialogModule,
  ConfirmDialogModule,
  MessagesModule,
  MessageModule,
  AutoCompleteModule,
  TooltipModule,
  FieldsetModule,
  SliderModule,
  ToastModule,
  DynamicDialogModule,
  InputSwitchModule,
  DividerModule,
  ChipsModule,
  ListboxModule,
  ConfirmPopupModule,
  AccordionModule,
  ToolbarModule,
  SplitterModule,
  ScrollPanelModule,
  CascadeSelectModule,
  CalendarModule,
  ToggleButtonModule,
  ColorPickerModule,
  BadgeModule,
  InputMaskModule,
  ProgressBarModule,
  TagModule,
  OrganizationChartModule,
  BlockUIModule,
  DeferModule,
  FileUploadModule,
  CarouselModule,
  SelectButtonModule,
  KeyFilterModule,
  VirtualScrollerModule,
  TreeModule,
  SidebarModule,
  ChartModule,
  Ng2SearchPipeModule,
  MenuModule,
  PickListModule,
];

/**
 * Do declare "dump" components, directives, and pipes in a shared module when
 * those items will be re-used and referenced by the components declared in other feature modules.
 *
 * Do declare all components, directives, and pipes in the SharedModule.
 *
 * Do export all symbols from the SharedModule that other feature modules need to use.
 *
 * DO import the SharedModule into any other Feature Modules.
 *
 * DO import FormsModule, ReactiveFormsModule and other (3rd-party) modules you need.
 *
 * DO NOT provide app-wide singleton services in SharedModule. Instead move these to the CoreModule.
 *
 * DO NOT import the SharedModule into the AppModule
 *
 * Place at client app, affter release or stable then we move some common component into CoreModule
 *
 */
@NgModule({
  declarations: [
    ...components.sharedComponents,
    ...pipes.sharedPipes,
    ...directives.sharedDirectives,
    MetaDataHeaderComponent,
    ImportDialogUserComponent,
    ImportDialogTrainingProgramComponent,
    UserListComponent,
  ],
  imports: [
    /* angular stuff */
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    /* 3rd party libraries */
    ...PRIMENG_DEPENDENCIES,
    /* 3rd party libraries */
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    /* 3rd party libraries */
    ...PRIMENG_DEPENDENCIES,
    /* 3rd party libraries */

    /* our own custom components */
    ...components.sharedComponents,
    /* our own custom pipes */
    ...pipes.sharedPipes,
    /* our own custom directives */
    ...directives.sharedDirectives,
  ],
  providers: [DecimalPipe, DatePipe, ...pipes.sharedPipes],
})
export class SharedModule {}
