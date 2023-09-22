import { defer, Observable } from 'rxjs';
import { MenuTray } from 'src/app/shared/components/menu-tray/menu-tray.component';
import { SafeAny } from '../models/any';
import { MenuItem } from '../models/menu-item';
// import { saveAs } from 'file-saver';

export function isBoolean(value: SafeAny): value is boolean {
    return typeof value === 'boolean';
}

export function isFunction(value: SafeAny): value is Function {
    return typeof value === 'function';
}

export function isNumber(value: SafeAny): value is number {
    return typeof value === 'number';
}

export function isObject(value: SafeAny): value is object {
    return typeof value === 'object' && value !== null;
}

export function isString(value: SafeAny): value is string {
    return typeof value === 'string';
}

export function isNull(obj: SafeAny) {
    return obj === null;
}

export const uniqBy = (arr, predicate) => {
    if (!Array.isArray(arr)) {
        return [];
    }

    const cb = typeof predicate === 'function' ? predicate : (o) => o[predicate];

    const pickedObjects = arr
        .filter((item) => item)
        .reduce((map, item) => {
            const key = cb(item);

            if (!key) {
                return map;
            }

            return map.has(key) ? map : map.set(key, item);
        }, new Map())
        .values();

    return [...pickedObjects];
};

export function deepEqual(x, y) {
    if (x === y) {
        return true;
    }
    if (typeof x === 'object' && x != null && typeof y === 'object' && y != null) {
        if (Object.keys(x).length !== Object.keys(y).length) {
            return false;
        }

        // eslint-disable-next-line no-restricted-syntax
        for (const prop in x) {
            if (y.hasOwnProperty(prop)) {
                if (!deepEqual(x[prop], y[prop])) {
                    return false;
                }
            } else {
                return false;
            }
        }

        return true;
    }
    return false;
}

export function restoreOriginalOrderArray(originArr: SafeAny[], secondArr: SafeAny[], key: string): SafeAny[] {
    return originArr.filter((ori) => secondArr.map((second) => second[key]).includes(ori[key]));
}

export const checkListMenuItem = (nav: MenuItem[], menu: MenuTray[], level: number = 1, code?: string) => {
    let checkList = null;
    if (level === 2) {
        checkList = nav.find((x) => x.routerLinkActiveUrl === code).items;
    }
    const listRemove: string[] = [];
    menu.forEach((e, idx) => {
        // for parent list nav config
        if (level === 1) {
            const founded = nav.find((x) => x?.routerLink === e.routeLink || x?.routerLinkActiveUrl === e.routeLink);
            if (!founded) {
                listRemove.push(e?.routeLink);
            }
            // for parent list nav config
        }
        // for sub list nav config
        else if (checkList) {
            const founded = checkList.find((x) => x?.routerLink.endsWith(e.routeLink.replace('.', '')));
            if (!founded) {
                listRemove.push(e?.routeLink);
            }
        }
    });
    menu = menu.filter((x) => !listRemove.includes(x.routeLink));
    return menu;
};

export const prepare = <T>(callback: () => void) => {
    return (source: Observable<T>): Observable<T> =>
        defer(() => {
            callback();
            return source;
        });
};

export const compareTwoListString = (a: string[], b: string[]) => {
    return a.sort().toString() === b.sort().toString();
};

// export const downloadFile = (response: any, fileName?: string): void => {
//     const blob = new Blob([response.body], { type: response.headers.get('content-type') });
//     fileName = fileName || response.headers.get('content-disposition').split('filename=')[1].split(';')[0];
//     const file = new File([blob], fileName, { type: response.headers.get('content-type') });
//     saveAs(file);
// };
