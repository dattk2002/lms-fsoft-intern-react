import { Injectable } from '@angular/core';
import { Observable, Observer, Subscription } from 'rxjs';
import { filter, share } from 'rxjs/operators';
import { SafeAny } from '../models/any';

/**
 * An utility class to manage RX events
 */
@Injectable({
    providedIn: 'root',
})
export class EventManager {
    observable: Observable<SafeAny>;

    observer: Observer<SafeAny> | undefined;

    constructor() {
        this.observable = Observable.create((observer: Observer<SafeAny>) => {
            this.observer = observer;
        }).pipe(share());
    }

    /**
     * Method to broadcast the event to observer
     */
    broadcast(event) {
        if (this.observer != null) {
            this.observer.next(event);
        }
    }

    /**
     * Method to subscribe to an event with callback
     */
    subscribe(eventName, callback) {
        const subscriber: Subscription = this.observable.pipe(filter((event) => event.name === eventName)).subscribe(callback);
        return subscriber;
    }

    /**
     * Method to unsubscribe the subscription
     */
    destroy(subscriber: Subscription) {
        subscriber.unsubscribe();
    }
}
