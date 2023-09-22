import { Injectable } from '@angular/core';
import { SafeAny } from '../models/any';

@Injectable({
    providedIn: 'root',
})
export class LocalStorageService {
    set(name: string, value: SafeAny) {
        localStorage.setItem(name, value);
    }

    get(name: string) {
        return localStorage.getItem(name) || '{}';
    }

    getItem(name: string) {
        return localStorage.getItem(name) || '{}';
    }

    clear(name: string) {
        return localStorage.removeItem(name);
    }
}
