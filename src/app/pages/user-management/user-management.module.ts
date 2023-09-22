import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { UserManagementRoutingModule } from './user-management-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';import { SharedModule } from 'src/app/shared/shared.module';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { AccordionModule } from 'primeng/accordion';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { UserPermisssionComponent } from './user-permisssion/user-permisssion.component';
import { DropdownModule } from 'primeng/dropdown';
import { ToggleButtonModule } from 'primeng/togglebutton';
// import { ImportDialogUserComponent } from 'src/app/shared/components/import-dialog/import-dialog-user/import-dialog-user.component';

@NgModule({
  declarations: [
    UserListComponent,
    UserPermisssionComponent,
    // ImportDialogUserComponent
  ],
  imports: [
    CommonModule,
    UserManagementRoutingModule,
    ButtonModule,
    ReactiveFormsModule,
    DialogModule,
    SharedModule,
    ScrollPanelModule,
    AccordionModule,
    TableModule,
    FormsModule,
    DropdownModule,
    ToggleButtonModule
  ]
})
export class UserManagementModule { }
