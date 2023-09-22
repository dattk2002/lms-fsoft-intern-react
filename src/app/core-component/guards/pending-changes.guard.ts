import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { Observable } from 'rxjs/internal/Observable';

export interface CanComponentDeactivate {
    canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable({
    providedIn: 'root',
})
export class PendingChangesGuard implements CanDeactivate<CanComponentDeactivate> {
    constructor(private confirmService: ConfirmationService) {}

    canDeactivate(component: CanComponentDeactivate): boolean | Observable<boolean> | Promise<boolean> {
        // if there are no pending changes, just allow deactivation; else confirm first
        // NOTE: this warning message will only be shown when navigating elsewhere within your angular app;
        // when navigating away from your angular app, the browser will show a generic warning message
        // see http://stackoverflow.com/a/42207299/7307355
        if (component.canDeactivate()) {
            return true;
        }

        return this.getConfirmation(component);
    }

    getConfirmation(component?: any): Observable<boolean> {
        return new Observable((observer) => {
            this.confirmService.confirm({
                message: 'ms001',
                header: 'Confirm',
                acceptLabel: 'Ok',
                rejectLabel: 'Cancel',
                icon: 'pi pi-exclamation-triangle',
                key: 'global',
                accept: () => {
                    if (component?.isExecutionPage) {
                        component?.clearInspectionElement();
                    }
                    observer.next(true);
                },
                reject: () => {
                    window.history.pushState(null, '', window.location.href);
                    observer.next(false);
                },
            });
        });
    }
}
