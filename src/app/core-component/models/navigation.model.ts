import { MenuItem } from './menu-item';

export interface RouteDataModel {
    title?: string;
    breadcrumb?: string | MenuItem;
    mode?: string;
    activeNav?: boolean;
    sidebarOverlay?: boolean;
    authorities?: string | string[];
}
