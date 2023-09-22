import { Component } from '@angular/core';
interface Per {
  name: string;
}

@Component({
  selector: 'app-user-permisssion',
  templateUrl: './user-permisssion.component.html',
  styleUrls: ['./user-permisssion.component.scss'],
})
export class UserPermisssionComponent {

  permissions = [
    { name: 'Acsess denied' },
    { name: 'View' },
    { name: 'Modify' },
    { name: 'Create' },
    { name: 'Full access' },
  ];
  selectedPer: Per;
  role= ['Super Admin', 'Class admin', 'Trainer','Student'];
  constructor() {

    this.permissions
  }
}
