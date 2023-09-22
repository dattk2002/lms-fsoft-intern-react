import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges, forwardRef, ChangeDetectorRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export enum StatusEnum {
    'EMPTY' = 'empty',
    'READY' = 'ready',
    'INPROGRESS' = 'inprogress',
    'SUCCESS' = 'success',
    'HIDDEN' = 'hidden',
}

export enum ViewValueEnum {
    'GROUP_PROGRESS' = 'GROUP_PROGRESS',
    'GROUP_INDICATOR' = 'GROUP_INDICATOR',
    'OPERATION_PROGRESS' = 'OPERATION_PROGRESS',
    'OPERATION_INDICATOR' = 'OPERATION_INDICATOR',
}

const customInputControlValueAccessor = (extendedInputComponent: any) => {
    return {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => extendedInputComponent),
        multi: true,
    };
};

@Component({
    selector: 'app-progress-card',
    templateUrl: './progress-card.component.html',
    styleUrls: ['./progress-card.component.scss'],
    providers: [customInputControlValueAccessor(ProgressCardComponent)],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgressCardComponent implements OnInit, OnChanges, ControlValueAccessor {
    @Input() completed: boolean = false;

    @Input() groupValue: string;

    @Input() operationValue: string;

    @Input() operationPercent: string;

    @Input() groupStatus: string;

    @Input() operationStatus: string;

    @Input() viewValues: string[];

    @Input() disabled: boolean = false;

    isSelected: boolean = false;

    onChange: any = () => {};

    onTouch: any = () => {};

    classes: any = {
        'progress-card': true,
    };

    operationClasses = {
        'progress-bar': true,
    };

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    constructor(private cd: ChangeDetectorRef) {}

    get canChecked() {
        return [StatusEnum.READY.toString(), StatusEnum.INPROGRESS.toString()].includes(this.operationStatus) && !this.disabled;
    }

    get isShowGroupProgress() {
        return this.viewValues.includes(ViewValueEnum.GROUP_PROGRESS);
    }

    get isShowGroupIndicator() {
        return this.viewValues.includes(ViewValueEnum.GROUP_INDICATOR);
    }

    get isShowOperationProgress() {
        return this.viewValues.includes(ViewValueEnum.OPERATION_PROGRESS);
    }

    get isShowOperationIndicator() {
        return this.viewValues.includes(ViewValueEnum.OPERATION_INDICATOR);
    }

    get isHiddenItem() {
        return this.groupStatus === StatusEnum.HIDDEN;
    }

    ngOnChanges(changes: SimpleChanges): void {
        const notShowValue = !(this.isShowGroupIndicator || this.isShowOperationIndicator) || this.isHiddenItem;
        const isOpSuccess = this.operationStatus === StatusEnum.SUCCESS;
        this.classes = {
            ...this.classes,
            [this.groupStatus]: this.isShowGroupProgress && !this.isHiddenItem,
            click: this.canChecked,
            'invisible-value': notShowValue,
            'completed-border': this.completed || isOpSuccess,
        };

        this.operationClasses = {
            ...this.operationClasses,
            [this.operationStatus]: this.isShowOperationProgress && !this.isHiddenItem,
        };
    }

    ngOnInit(): void {}

    // sets the value used by the ngModel of the element
    set value(val: boolean) {
        this.isSelected = val;
        this.onChange(val);
        this.onTouch(val);
    }

    // This will will write the value to the view if the the value changes occur on the model programmatically
    writeValue(value: boolean) {
        this.isSelected = value;
        this.cd.markForCheck();
    }

    // When the value in the UI is changed, this method will invoke a callback function
    registerOnChange(fn: any) {
        this.onChange = fn;
    }

    // When the element is touched, this method will get called
    registerOnTouched(onTouched: Function) {
        this.onTouch = onTouched;
    }

    onClick() {
        if (this.canChecked) {
            const isSelected = !this.isSelected;
            this.isSelected = isSelected;
            this.onChange(isSelected);
        }
    }
}
