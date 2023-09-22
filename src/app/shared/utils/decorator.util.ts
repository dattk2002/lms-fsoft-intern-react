/* eslint-disable no-param-reassign */
import { Table } from 'primeng/table';
import { TreeTable } from 'primeng/treetable';
import { SafeAny } from 'src/app/core-component/models/any';

export function statusConverter(target: SafeAny, key: string) {
    if (delete target[key]) {
        Object.defineProperty(target, key, {
            get() {
                if (this.isCompleted) {
                    return 'Completed';
                }
                return 'Pending';
            },
            set(v) {
                this.isCompleted = v;
            },
            enumerable: true,
            configurable: true,
        });
    }
}

export const getCurrentPageReport = (table: TreeTable | Table | undefined, totalItem?: number) => {
    if (totalItem === 0) {
        return '0 - 0 / 0';
    }
    if (table && table.value && table.value.length) {
        return `${table.first + 1} - ${String(Math.min(table.first + (table.rows || 0), table.totalRecords))} / ${table.totalRecords}`;
    }
    return '0 - 0 / 0';
};

export class ConvertTimeZoneDateFilter {
    valueDateFilter: number;

    constructor(value: Date, diff: any) {
        this.valueDateFilter = new Date(value).getTime() - diff * 60 * 60 * 1000;
    }
}
