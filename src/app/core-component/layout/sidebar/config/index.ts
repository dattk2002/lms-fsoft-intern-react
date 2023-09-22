import { InjectionToken } from '@angular/core';
import { MenuItem } from 'src/app/core-component/models/menu-item';

export const SIDE_NAV_CONFIG = new InjectionToken<MenuItem[]>('SIDE_NAV_CONFIG');
