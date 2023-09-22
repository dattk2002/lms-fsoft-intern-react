import { Observable, timer } from 'rxjs';
import { delayWhen } from 'rxjs/operators';

const DELAY_AT_LEAST = 500;
export function delayAtLeast<T>(delay = DELAY_AT_LEAST): (source: Observable<T>) => Observable<T> {
    return (source) => {
        const startTime = Date.now();

        return source.pipe(
            // Delay at least 0.5s
            delayWhen(() => timer(delay + startTime - Date.now()))
        );
    };
}
