import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Column } from 'src/app/core-component/models/table.model';
import { LocalStorageService } from 'src/app/core-component/services/localStorage.service';
// import { restoreOriginalOrderArray } from '@core/utils';

@Component({
  selector: 'app-select-column-table',
  template: `
    <p-multiSelect
      [autofocusFilter]="false"
      [options]="optionsTranslate"
      [(ngModel)]="value"
      (ngModelChange)="ngModelChange($event)"
      optionDisabled="hiddenSelectColumn"
      optionLabel="label"
      [maxSelectedLabels]="0"
      appendTo="body"
      selectedItemsLabel="{{
        'label.column-selected'
      }}"
      placeholder="{{ 'label.choose-columns' }}"
      [style]="{ minWidth: '170px' }"
    >
      <ng-template let-column pTemplate="item">
        {{ column.header }}
      </ng-template>
    </p-multiSelect>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectColumnTableComponent implements OnInit, OnChanges {
  _value: Column[];

  @Input() options: Column[];

  onChange: (data: any) => void;

  onTouch: () => void;

  isDisabled: boolean;

  @Input() stateKey: string;

  @Output() selectChange: EventEmitter<any> = new EventEmitter();

  unInitialized = true;

  optionsTranslate: Column[] = [];

  constructor(
    private localStorage: LocalStorageService,
    private ref: ChangeDetectorRef
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    const options = [];
    for (let propName in changes) {
      let change = changes[propName];
      let curVal = JSON.stringify(change.currentValue);
      let prevVal = JSON.stringify(change.previousValue);

      if (curVal !== prevVal) {
        (this.options || []).forEach((col) => {
            const obj = { ...col };
            obj['label'] = col.header;
            options.push(obj);
          });
          this.optionsTranslate = options;
          if (this.unInitialized) {
            this.init();
          } else {
            this.value = change.currentValue;
          }
      }
    }
   
  }

  ngOnInit(): void {}

  init() {
    const session = this.localStorage.get(this.stateKey);
    if (session && session !== '{}') {
      const newOptions = [];
      const oldOptions: Column[] = JSON.parse(session);
      (oldOptions || []).forEach((op) => {
        const selectedColumn = this.optionsTranslate.find(
          (col: Column) => col.field === op.field
        );
        if (selectedColumn) {
          newOptions.push(selectedColumn);
        }
      });
      this.value = newOptions;
    } else {
      this.value = this.optionsTranslate;
    }
    this.unInitialized = false;
  }

  ngModelChange(val) {}

  @Input() get value(): Column[] {
    return this._value;
  }

  set value(val: Column[]) {
    // restore original order
    // this._value = restoreOriginalOrderArray(this.options || [], val || [], 'field');
    // TODO get list order follow user select
    this._value = val;
    this.selectChange.emit(this._value);
    this.localStorage.set(this.stateKey, JSON.stringify(this._value));
  }
}
