import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

import { BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';
import { distinctUntilChanged, filter, map, mergeMap, tap } from 'rxjs/operators';
import { RouteDataModel } from '../models/navigation.model';

@Injectable({ providedIn: 'root' })
export class NavigationService {
    _routeData$: Subject<RouteDataModel> = new ReplaySubject<RouteDataModel>(1);

    _currentURL$ = new BehaviorSubject('');

    constructor(public activatedRoute: ActivatedRoute, public router: Router, private location: Location) {
        this.router.events
            .pipe(
                filter((event) => event instanceof NavigationEnd), // Only get the event of NavigationEnd
                distinctUntilChanged(),
                map(() => activatedRoute), // Listen to activateRoute
                map((route) => {
                    while (route.firstChild) {
                        route = route.firstChild;
                    }
                    return route; // get activation route
                }),
                filter((route) => route.outlet === 'primary'),
                tap(() => {
                    this._currentURL$.next(router.url);
                }), // capture current url
                mergeMap((route) => route.data) // get the data
            )
            .subscribe((data) => {
                this._routeData$.next(data as RouteDataModel);
            });
    }

    routeData$(): Observable<RouteDataModel> {
        return this._routeData$;
    }

    currentURL$(): Observable<string> {
        return this._currentURL$;
    }

    back(): void {
        this.location.back();
    }
}
