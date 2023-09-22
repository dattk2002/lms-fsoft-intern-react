import { AccountService } from 'src/app/core-component/auth/services';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor(private accountService: AccountService) {}
  token = null;
  ngOnInit() {
    setInterval(() => {
      this.token = localStorage.getItem('token');
    }, 100);
  }

  logout() {
    this.accountService.logout();
    this.token = null;
  }
}
