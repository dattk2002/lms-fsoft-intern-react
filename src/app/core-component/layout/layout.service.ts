import { Inject, Injectable, Optional } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AccountService } from '../auth/services/account.service';
import { MenuItem } from '../models/menu-item';
import { SIDE_NAV_CONFIG } from './sidebar/config';

enum RouteCheckBySetting {
    HOME = '/home',
    SYLLABUS = '/syllabus',
}

@Injectable({
    providedIn: 'root',
})
export class LayoutService {
    public _sideNavVisible$ = new BehaviorSubject(false);

    private _navOpen$ = new BehaviorSubject(true);

    private _topNavbarVisible$ = new BehaviorSubject(true);

    public _sidebarHover$ = new BehaviorSubject(false);

    private _navConfig$ = new BehaviorSubject(null);



    listParentRouteCheckBySetting: any[] = [
        RouteCheckBySetting.HOME,
        RouteCheckBySetting.SYLLABUS,
    ];

    constructor(
        // @Optional() @Inject(SIDE_NAV_CONFIG) private SIDE_NAV_ITEMS: MenuItem[],
        private accountService: AccountService,
    ) {
        // console.log(SIDE_NAV_ITEMS);
    }

    // action for changed config navbar
    setNavConfig(sideNavItems) {
        this._navConfig$.next(sideNavItems);
    }

    getNavConfig$(): Observable<any> {
        return this._navConfig$;
    }

    setSideNavVisible(val: boolean) {
        this._sideNavVisible$.next(val);
    }

    sideNavVisible$(): Observable<boolean> {
        return this._sideNavVisible$;
    }

    toggleSideNav(visibility?: boolean) {
        if (typeof visibility !== 'undefined') {
            this._sideNavVisible$.next(visibility);
        } else {
            this._sideNavVisible$.next(!this._sideNavVisible$.value);
        }
    }

    setNavOpen(val: boolean) {
        this._navOpen$.next(val);
    }

    sideNavOpen$(): Observable<boolean> {
        return this._navOpen$;
    }

    toggleNav(visibility?: boolean) {
        if (typeof visibility !== 'undefined') {
            this._navOpen$.next(visibility);
        } else {
            this._navOpen$.next(!this._navOpen$.value);
        }
    }

    setTopNavbarVisible(val: boolean) {
        this._topNavbarVisible$.next(val);
    }

    topNavbarVisible$(): Observable<boolean> {
        return this._topNavbarVisible$;
    }

    toggleTopNavbar(visibility?: boolean) {
        if (typeof visibility !== 'undefined') {
            this._topNavbarVisible$.next(visibility);
        } else {
            this._topNavbarVisible$.next(!this._topNavbarVisible$.value);
        }
    }

    setSidebarHover(val: boolean) {
        this._sidebarHover$.next(val);
    }

    sidebarHover$(): Observable<boolean> {
        return this._sidebarHover$;
    }

    toggleSidebarHover(force?: boolean) {
        if (typeof force !== 'undefined') {
            this._sidebarHover$.next(force);
        } else {
            this._sidebarHover$.next(!this._sidebarHover$.value);
        }
    }
}
