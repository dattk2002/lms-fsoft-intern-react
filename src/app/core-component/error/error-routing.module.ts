import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { ErrorModule } from './error.module';

/* Containers */
import * as errorContainers from './containers';
import { RouteDataModel } from '../models/navigation.model';

/* Routes */
export const ROUTES: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/home',
    },
    {
        path: '401',
        canActivate: [],
        component: errorContainers.Error401Component,
        data: {
            title: 'Error 401',
            activeNav: false,
        } as RouteDataModel,
    },
    {
        path: '403',
        canActivate: [],
        component: errorContainers.Error403Component,
        data: {
            title: 'Error 403',
            activeNav: false,
        } as RouteDataModel,
    },
    {
        path: '404',
        canActivate: [],
        component: errorContainers.Error404Component,
        data: {
            title: 'Error 404',
            activeNav: false,
        } as RouteDataModel,
    },
    {
        path: '500',
        canActivate: [],
        component: errorContainers.Error500Component,
        data: {
            title: 'Error 500',
            activeNav: false,
        } as RouteDataModel,
    },
    {
        path: '**',
        pathMatch: 'full',
        component: errorContainers.Error404Component,
        data: {
            title: 'Error 404',
            activeNav: false,
        } as RouteDataModel,
    },
];

@NgModule({
    imports: [ErrorModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class ErrorRoutingModule {}
