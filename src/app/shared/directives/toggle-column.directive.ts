import {
  ChangeDetectorRef,
  Directive,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { MultiSelect } from 'primeng/multiselect';
import { SafeAny } from 'src/app/core-component/models/any';

interface ToggleColumnState {
  value?: Array<any>;
}

@Directive({
  selector: '[appToggleColumn]',
})
export class KeyValueTagSelectDirective implements OnInit, OnChanges {
  stateRestored: boolean;

  @Input() stateKey: string;

  constructor(private select: MultiSelect, public cd: ChangeDetectorRef) {}

  ngOnInit() {
    this.select.onChange.subscribe((res) => {
      if (this.isStateful()) {
        this.saveState(res.value);
      }
    });
  }

  ngOnChanges(simpleChange: SimpleChanges) {
    // if (simpleChange.value) {
    //     if (this.isStateful() && !this.stateRestored) {
    //         this.restoreState();
    //     }
    // }
    for (let propName in simpleChange) {
      let change = simpleChange[propName];
      let curVal = JSON.stringify(change.currentValue);
      let prevVal = JSON.stringify(change.previousValue);

      if (curVal !== prevVal) {
        if (this.isStateful() && !this.stateRestored) {
          this.restoreState();
        }
      }
    }
  }

  saveState(value: SafeAny) {
    const state: ToggleColumnState = {};
    state.value = value;

    window.localStorage.setItem(this.stateKey, JSON.stringify(state));
  }

  restoreState() {
    const storage = window.localStorage;
    const stateString = storage.getItem(this.stateKey);
    const dateFormat = /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/;
    const reviver = (key, value) => {
      if (typeof value === 'string' && dateFormat.test(value)) {
        return new Date(value);
      }

      return value;
    };

    if (stateString) {
      const state: ToggleColumnState = JSON.parse(stateString, reviver);
      // eslint-disable-next-line no-console
      console.log(state);
      // TODO: doing
    }

    this.stateRestored = true;
  }

  clearSate() {
    if (this.isStateful()) {
      window.localStorage.removeItem(this.stateKey);
    }
  }

  isStateful() {
    return this.stateKey != null;
  }
}
