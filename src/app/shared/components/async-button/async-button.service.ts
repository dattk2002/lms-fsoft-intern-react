import { delayWhen, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Subject, Observable, timer } from 'rxjs';

export const DELAY_AT_LEAST = 500;
@Injectable()
export class AsyncButtonService {
    isLoading = new Subject<boolean>();

    private show() {
        this.isLoading.next(true);
    }

    private hide() {
        this.isLoading.next(false);
    }

    observe<T>(): (source: Observable<T>) => Observable<T> {
        return (source) => {
            const startTime = Date.now();
            this.show();

            return source.pipe(
                // Delay at least 0.5s
                delayWhen(() => timer(DELAY_AT_LEAST + startTime - Date.now())),
                tap({
                    next: () => this.hide(),
                    error: () => this.hide(),
                })
            );
        };
    }
}
