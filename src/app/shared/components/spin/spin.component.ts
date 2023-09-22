import {
    ChangeDetectorRef,
    Component,
    HostBinding,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    SimpleChanges,
    TemplateRef,
    ViewEncapsulation,
} from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject, timer } from 'rxjs';
import { debounce, distinctUntilChanged, startWith, switchMap, takeUntil } from 'rxjs/operators';
import { SafeAny } from 'src/app/core-component/models/any';

export type SpinSizeType = 'large' | 'default' | 'small';

@Component({
    selector: 'app-spin',
    preserveWhitespaces: false,
    encapsulation: ViewEncapsulation.None,
    template: `
        <ng-template #defaultTemplate>
            <span class="tdx-spin-circle"></span>
        </ng-template>
        <div *ngIf="isLoading">
            <div
                class="tdx-spin"
                [class.tdx-spin-spinning]="isLoading"
                [class.tdx-spin-lg]="size === 'large'"
                [class.tdx-spin-sm]="size === 'small'"
            >
                <ng-template [ngTemplateOutlet]="indicator || defaultTemplate"></ng-template>
            </div>
        </div>
        <div *ngIf="!simple" class="tdx-spin-container" [class.tdx-spin-blur]="isLoading">
            <ng-content></ng-content>
        </div>
    `,
    styleUrls: ['./spin.component.scss'],
})
export class SpinComponent implements OnChanges, OnDestroy, OnInit {
    @Input() indicator: TemplateRef<SafeAny> | null = null;

    @Input() size: SpinSizeType = 'default';

    @Input() delay = 0;

    @Input() simple = false;

    @Input() spinning = true;

    @Input() duration = 0;

    @HostBinding('class.tdx-spin-nested-loading')
    get isNestedLoading(): boolean {
        return !this.simple;
    }

    private destroy$ = new Subject<void>();

    private spinning$ = new BehaviorSubject(this.spinning);

    private delay$ = new ReplaySubject<number>(1);

    isLoading = false;

    constructor(private cdr: ChangeDetectorRef) {}

    ngOnInit(): void {
        const loading$ = this.delay$.pipe(
            startWith(this.delay),
            distinctUntilChanged(),
            switchMap((delay) => {
                if (delay === 0) {
                    return this.spinning$;
                }

                return this.spinning$.pipe(debounce((spinning) => timer(spinning ? delay : this.duration)));
            }),
            takeUntil(this.destroy$)
        );
        loading$.subscribe((loading) => {
            this.isLoading = loading;
            this.cdr.markForCheck();
        });
    }

    ngOnChanges(changes: SimpleChanges): void {
        const { spinning, delay } = changes;
        if (spinning) {
            this.spinning$.next(this.spinning);
        }
        if (delay) {
            this.delay$.next(this.delay);
        }
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
