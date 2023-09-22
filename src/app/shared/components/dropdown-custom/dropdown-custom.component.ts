/* eslint-disable @angular-eslint/no-output-on-prefix */
/* eslint-disable @typescript-eslint/no-use-before-define */
import { Component, ElementRef, Input, Output, ViewChild, EventEmitter, forwardRef } from '@angular/core';
import { Dropdown } from 'primeng/dropdown';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

export const DROPDOWN_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DropDownCustomComponent),
    multi: true,
};

@Component({
    selector: 'app-dropdown-custom',
    templateUrl: './dropdown-custom.component.html',
    styleUrls: ['./dropdown-custom.component.scss'],
    providers: [DROPDOWN_VALUE_ACCESSOR],
})
export class DropDownCustomComponent implements ControlValueAccessor {
    @Input() options: Array<any>;

    @Input() optionLabel: string;

    @Input() optionValue: string;

    @Input() placeholder: string;

    @Input() disabled: boolean;

    @Output() onChange: EventEmitter<any> = new EventEmitter();

    @ViewChild('filter') filterViewChild: ElementRef;

    @ViewChild('DD') DropViewChild: Dropdown;

    onModelChange: Function = () => {};

    onModelTouched: Function = () => {};

    registerOnChange(fn: any): void {
        this.onModelChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onModelTouched = fn;
    }

    setDisabledState?(isDisabled: boolean): void {
        if (this.DropViewChild) {
            this.DropViewChild.setDisabledState(isDisabled);
        }
    }

    writeValue(value: any): void {
        if (this.DropViewChild) {
            this.DropViewChild.resetFilter();
            this.DropViewChild.writeValue(value);
        }
    }

    onShow() {
        this.filterViewChild.nativeElement.focus();
    }

    onSelectChange(event) {
        this.onModelTouched();
        this.onModelChange(event.value);
        this.onChange.emit(event);
    }

    onEnterSearch(value) {
        const filterList = this.options.filter((item) => item[this.optionLabel].toLowerCase() === value.toLowerCase());
        if (filterList && filterList.length === 1) {
            this.DropViewChild.onItemClick({
                originalEvent: null,
                option: filterList[0],
            });
        }
    }
}
