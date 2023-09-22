import { Injectable } from '@angular/core';
// import { environment } from '@env';
import { Observable, of } from 'rxjs';
import { CookieService } from '../../services/cookie.service';
import { LocalStorageService } from '../../services/localStorage.service';
import { AccountService } from './account.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn$?: Observable<boolean>;

  isLoggedOut$?: Observable<boolean>;

  constructor(
    private cookieService: CookieService,
    private localStorage: LocalStorageService
  ) {}

  login() {
    return of(
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiS2F0aGFyeW4gQm91Y2hlciIsIlVzZXJJZCI6IjUiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJTdXBlckFkbWluIiwiZXhwIjoxNjc3Njg5MjI3LCJpc3MiOiJGQVRNU0F1dGhlbnRpY2F0b3IiLCJhdWQiOiJGQVRNU1Bvc3RtYW5DbGllbnQifQ.ocSWFiTmmMLFZGdcpIGqZcyWuNq-ca6ovuHCIX9QYss'
    );
  }

  register() {}

  refreshToken() {}
}
