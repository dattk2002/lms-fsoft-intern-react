import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable, ReplaySubject, of } from 'rxjs';
import { shareReplay, tap, catchError, pluck } from 'rxjs/operators';

import { Account, PermissionsEntity } from '../models';
import { CookieService } from '../../services/cookie.service';
import { RESTApiModel } from '../../models/restful-api.model';
import { environment } from 'enviroments/environment.prod';
import { AuthService } from './auth.service';
import { LocalStorageService } from '../../services/localStorage.service';

@Injectable({ providedIn: 'root' })
export class AccountService {
  private userIdentity: Account | null = null;

  private authenticationState = new ReplaySubject<Account | null>(1);

  private accountCache$?: Observable<Account | null>;

  constructor(
    private http: HttpClient,
    private router: Router,
    private cookieService: CookieService,
    private localStorage: LocalStorageService,
    private auth: AuthService
  ) {}

  authenticate(identity: Account | null): void {
    this.userIdentity = identity;
    this.authenticationState.next(this.userIdentity);
  }

  hasAnyAuthority(authorities: string[] | string): boolean {
    // no need permission
    if (authorities?.length === 0) {
      return true;
    }
    if (!this.userIdentity) {
      return false;
    }
    if (!Array.isArray(authorities)) {
      authorities = [authorities];
    }
    return (this.userIdentity as any).permissions.some(
      (authority: PermissionsEntity) => authorities.includes(authority.code)
    );
  }

  identity(force?: boolean): Observable<Account | null> {
    if (!this.accountCache$ || force || !this.isAuthenticated()) {
      this.accountCache$ = this.fetch().pipe(
        catchError(() => {
          this.router.navigate(['error/403'], { replaceUrl: true });
          return of(null);
        }),
        tap((account: Account | null) => {
          if (account?.status === 'INACTIVE') {
            this.router.navigate(['error/403'], { replaceUrl: true });
            return;
          }
          this.authenticate(account);

          // After retrieve the account info, the language will be changed to
          // the user's preferred language configured in the account setting
          // unless user have choosed other language in the current session

          //   if (account) {
          //     this.navigateToHomepage(account);
          //   }
        }),
        shareReplay()
      );
    }
    return this.accountCache$;
  }

  getUserIdentity(): Account {
    return this.userIdentity as any;
  }

  isAuthenticated(): boolean {
    return this.userIdentity !== null;
  }

  getAuthenticationState(): Observable<Account | null> {
    return this.authenticationState.asObservable();
  }

  private fetch(): Observable<Account> {
    return this.http
      .get<RESTApiModel<Account>>(environment.userUrl + `/users/inf`)
      .pipe(pluck('data'));
  }

  // login() {
  //   //TODO: Hard token waiting page login
  //   this.auth.login().subscribe((res) => {});
  // }

  getToken(): string | null {
    return this.localStorage.get('token');
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  getAllUser(){
    return this.http.get(environment.userUrl + '/List');
  }

  // private navigateToHomepage(account: Account): void {
  //     function isValidHttpUrl(string) {
  //         let url;
  //         try {
  //             url = new URL(string);
  //         } catch (_) {
  //             return false;
  //         }
  //         return url.protocol === 'http:' || url.protocol === 'https:';
  //     }

  //     if (!this.sessionStorageService.retrieve('homepage')) {
  //         if (isValidHttpUrl(account.homepage) && (window.location.pathname === '/' || window.location.pathname === '')) {
  //             this.sessionStorageService.store('homepage', true);
  //             window.location.href = account.homepage;
  //         }
  //     }
  // }
}
