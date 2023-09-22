import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  OnInit,
  TemplateRef,
} from '@angular/core';
import { Observable } from 'rxjs';
import { AccountService } from '../../auth/services/account.service';
import { AuthService } from '../../auth/services/auth.service';
import { LocalStorageService } from '../../services/localStorage.service';
import { LayoutService } from '../layout.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  @ContentChild('notification') notificationTmpl: TemplateRef<any>;

  sideNavVisible$ = this.layoutService.sideNavVisible$();

  sideNavOpen$ = this.layoutService.sideNavOpen$();

  topNavbarVisible$ = this.layoutService.topNavbarVisible$();

  supportedLanguages = [];

  activeLanguage$!: Observable<string>;

  constructor(
    public layoutService: LayoutService,
    public authService: AuthService,
    private localStorage: LocalStorageService,
    public account: AccountService
  ) {}

  ngOnInit(): void {}

  onToggleSidebar(e: any) {
    this.layoutService.toggleSideNav();
  }

  onToggleSidebar2(e: any) {
    this.layoutService.toggleNav();
  }

  onTopNavbarToggle() {
    this.layoutService.toggleTopNavbar();
  }

  logout() {
    this.clearLocalStorageFilterTable();
    // this.authService.logout().subscribe();
  }

  setActiveLanguage(language: string): void {
    window.location.reload();
  }

  clearLocalStorageFilterTable() {
    localStorage.clear();
  }
}
