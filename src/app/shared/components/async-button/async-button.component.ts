import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { SafeAny } from 'src/app/core-component/models/any';
import { AsyncButtonService } from './async-button.service';

@Component({
    selector: 'app-async-button',
    template: `
        <button
            pRipple
            pButton
            [type]="type"
            style="{{ style }}"
            [loading]="isLoading | async"
            [label]="(isLoading | async) && labelLoading ? labelLoading : label"
            class="{{ styleClass }}"
            [disabled]="disabled || (isLoading | async)"
            (onFocus)="onFocusEvent($event)"
            (onBlur)="onBlurEvent($event)"
            (click)="onClickEvent($event)"
            [icon]="icon"
            [loadingIcon]="loadingIcon"
        ></button>
    `,
})
export class AsyncButtonComponent {
    isLoading: Subject<boolean> = this.asyncButtonService.isLoading;

    @Input()
    label = 'Button';

    @Input()
    labelLoading = '';

    @Input()
    type = 'button';

    @Input()
    styleClass = '';

    @Input()
    style = '';

    @Input()
    disabled = false;

    @Input()
    icon: string | undefined;

    @Input()
    loadingIcon = 'pi pi-spin pi-spinner';

    @Output() clickEvent: EventEmitter<SafeAny> = new EventEmitter();

    @Output() focusEvent: EventEmitter<SafeAny> = new EventEmitter();

    @Output() blurEvent: EventEmitter<SafeAny> = new EventEmitter();

    constructor(private asyncButtonService: AsyncButtonService) {}

    onClickEvent($event: SafeAny) {
        if ($event instanceof Event) {
            $event.stopPropagation();
        }
        this.clickEvent.emit($event);
    }

    onFocusEvent($event: SafeAny) {
        if ($event instanceof Event) {
            $event.stopPropagation();
        }
        this.clickEvent.emit($event);
    }

    onBlurEvent($event: SafeAny) {
        if ($event instanceof Event) {
            $event.stopPropagation();
        }
        this.clickEvent.emit($event);
    }
}
