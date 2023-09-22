import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Injectable, isDevMode } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AccountService } from '../services';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private accountService: AccountService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.accountService.identity().pipe(
      map((account) => {
        if (account) {
          // eslint-disable-next-line prefer-destructuring
          const authorities = route.data['authorities'];
          if (
            !authorities ||
            authorities.length === 0 ||
            this.accountService.hasAnyAuthority(authorities)
          ) {
            return true;
          }

          if (isDevMode()) {
            // eslint-disable-next-line no-console
            console.error(
              'User has not any of required authorities: ',
              authorities
            );
          }

          this.router.navigate(['error/403']);
          return false;
        }

        return false;
      })
    );
  }
}
