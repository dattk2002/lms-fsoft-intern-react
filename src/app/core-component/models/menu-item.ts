import { QueryParamsHandling } from '@angular/router';

export interface MenuItem {
    label?: string;
    icon?: string;
    command?: (event?: any) => void;
    url?: string;
    items?: MenuItem[];
    expanded?: boolean;
    disabled?: boolean;
    visible?: boolean;
    target?: string;
    escape?: boolean;
    routerLinkActiveUrl?: string;
    routerLinkActiveOptions?: any;
    separator?: boolean;
    separatorLabel?: string;
    badge?: string;
    badgeStyleClass?: string;
    style?: any;
    styleClass?: string;
    title?: string;
    id?: string;
    automationId?: any;
    tabindex?: string;
    routerLink?: any;
    queryParams?: { [k: string]: any };
    fragment?: string;
    queryParamsHandling?: QueryParamsHandling;
    preserveFragment?: boolean;
    skipLocationChange?: boolean;
    replaceUrl?: boolean;
    state?: {
        [k: string]: any;
    };
    skipRouterLink?: boolean;
    authorities?: string[] | string;
}
export enum RouteCheckBySetting {
    SETTING = '/setting',
    TIME_AND_ATTENDANCE = '/time-and-attendant',
    PRODUCTION_ORDER_MANAGEMENT = '/production-order-management',
    USER_GROUP = '/setting/user-group',
    HOLD_REASON = '/setting/hold-reasons',
    TASK_MANAGEMENT = '/setting/task-management',
    SHIFT_SETTING = '/time-and-attendant/shift-setting',
    SHIFT_ASSIGNMENT = '/time-and-attendant/shift-assignment',
    SHIFT_SCHEDULING = '/time-and-attendant/shift-scheduling',
    WORKSTATION_EXECUTION = '/production-order-management/workstation-executions',
    ALERT_CREATE = '/alert-creation',
    DASHBOARD = '/dashboard-menu',
    EANDON_DASHBOARD = '/dashboard-menu/eAndon-dashboard',
    WORK_CONTENT = '/work-contents',
    SET_UPS = '/work-contents/setups',
    CRITICAL_PATH = '/work-contents/critical-path',
    PLANNING = '/work-contents/planning',
    TRAINING = '/work-contents/training',
    DASH_BOARD = '/dashboard-menu/dashboard',
    DASH_BOARD_SUPERVISOR = '/dashboard-menu/dashboard-supervisor',
    DASH_BOARD_LIQUIDATION = '/dashboard-menu/dashboard-liquidation',
    DASH_BOARD_PROJECT_DASHBOARD = '/dashboard-menu/project-dashboard',
    DASH_BOARD_ADVANCE_DELAY = '/dashboard-menu/advance-delay',
}
export const listParentRouteCheckBySetting: any[] = [
    RouteCheckBySetting.SETTING,
    RouteCheckBySetting.TIME_AND_ATTENDANCE,
    RouteCheckBySetting.PRODUCTION_ORDER_MANAGEMENT,
    RouteCheckBySetting.DASHBOARD,
    RouteCheckBySetting.ALERT_CREATE,
    RouteCheckBySetting.WORK_CONTENT,
];
