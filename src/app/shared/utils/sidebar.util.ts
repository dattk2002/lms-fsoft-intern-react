import { RouteCheckBySetting } from "src/app/core-component/models/menu-item";

export const checkSwcsModule = (link: string, siteConfig: any, current: boolean) => {
    switch (link) {
        // SWCS Modules
        case RouteCheckBySetting.PLANNING:
            return siteConfig.isApplyWorkContentPlanning;
        case RouteCheckBySetting.CRITICAL_PATH:
            return siteConfig.isApplyCriticalPath;
        case RouteCheckBySetting.SET_UPS:
            return siteConfig.isApplySwcsSetup;
        case RouteCheckBySetting.TRAINING:
            return siteConfig.isApplyTraining;
        default:
            return current;
    }
};

export const checkDashboardModule = (link: string, siteConfig: any, current: boolean) => {
    switch (link) {
        case RouteCheckBySetting.DASH_BOARD:
            return siteConfig.isApplyDashboard;
        case RouteCheckBySetting.DASH_BOARD_SUPERVISOR:
            return siteConfig.isApplyDashboardSupervisor;
        case RouteCheckBySetting.DASH_BOARD_LIQUIDATION:
            return siteConfig.isApplyLiquidationDashboard;
        case RouteCheckBySetting.DASH_BOARD_PROJECT_DASHBOARD:
            return siteConfig.isApplyProjectDashboard;
        case RouteCheckBySetting.DASH_BOARD_ADVANCE_DELAY:
            return siteConfig.isApplyAdvanceDelayDashboard;
        case RouteCheckBySetting.EANDON_DASHBOARD:
            return siteConfig.isApplyEAndonDashboard;
        default:
            return current;
    }
};

// export const checkRouter = (keys: KeyMap[], module: string, state, router, siteConfig): boolean => {
//     keys?.forEach((x) => {
//         const indexOf = Object.values(ListSwcSMenuConfig).indexOf(x.urlEnum as unknown as ListSwcSMenuConfig);
//         const key = Object.values(ListSwcSMenuConfig)[indexOf];
//         if (state.url.includes(key)) {
//             if (!siteConfig[module][x.config]) {
//                 router.navigate(['error/403']);
//             }
//         }
//     });
//     return true;
// };

export interface KeyMap {
    urlEnum: any;
    config: string;
}

export interface WorkstationsExecutionConfigI {
    isApplyClockOnOff?: boolean;
    isApplyCompletedTerminate?: boolean;
    isApplyAlertHoldWorkstation?: boolean;
}

// export class SwcsModule {
//     isApplyWorkContent: boolean;

//     isApplyWorkContentPlanning: boolean;

//     isApplyCriticalPath: boolean;

//     isApplySwcsSetup: boolean;

//     isApplyTraining: boolean;

//     isApplyOeWithWorkContent: boolean;

//     workstationsExecutionConfig: WorkstationsExecutionConfigI;

//     constructor(params: SiteFeatureControl[]) {
//         this.isApplyWorkContent =
//             params?.find((item) => item['functionality'] === '' && item['module'] === SwcsEnum.SWCS_MODULE)?.applied || false;
//         this.isApplyWorkContentPlanning =
//             params?.find((item) => item['functionality'] === SwcsEnum.WORK_CONTENT_PLANNING)?.applied || false;
//         this.isApplyCriticalPath = params?.find((item) => item['functionality'] === SwcsEnum.CRITICAL_PATH)?.applied || false;
//         this.isApplySwcsSetup = params?.find((item) => item['functionality'] === SwcsEnum.SWCS_SETUP)?.applied || false;
//         this.isApplyTraining = params?.find((item) => item['configuration'] === SwcsEnum.SEED_INTEGRATION)?.applied || false;
//         this.isApplyOeWithWorkContent = params?.find((item) => item['functionality'] === SwcsEnum.OE_WITH_WORK_CONTENT)?.applied || false;
//         const workstationsExecutionConfig = (params || []).filter((item) => item['module'] === 'WORKSTATIONS_EXECUTION');
//         this.workstationsExecutionConfig = {
//             isApplyClockOnOff: workstationsExecutionConfig.find((item) => item['functionality'] === 'CLOCKING_ON_OFF')?.applied || false,
//             isApplyCompletedTerminate:
//                 workstationsExecutionConfig.find((item) => item['functionality'] === 'COMPLETE_TERMINATE')?.applied || false,
//             isApplyAlertHoldWorkstation:
//                 workstationsExecutionConfig.find((item) => item['functionality'] === 'ALERT_HOLD_WORKSTATION')?.applied || false,
//         };
//     }
// }

// export class DashboardModule {
//     isApplyDashboard: boolean;

//     isApplyDashboardSupervisor: boolean;

//     isApplyLiquidationDashboard: boolean;

//     isApplyEAndonDashboard: boolean;

//     isApplyProjectDashboard: boolean;

//     constructor(params: SiteFeatureControl[]) {
//         this.isApplyDashboard =
//             params?.find((item) => item['functionality'] === 'DASHBOARD' && item['module'] === 'DASHBOARDS')?.applied || false;
//         this.isApplyDashboardSupervisor =
//             params?.find((item) => item['functionality'] === 'SUPERVISOR_DASHBOARD' && item['module'] === 'DASHBOARDS')?.applied || false;
//         this.isApplyLiquidationDashboard =
//             params?.find((item) => item['functionality'] === 'LIQUIDATION_DASHBOARD' && item['module'] === 'DASHBOARDS')?.applied || false;
//         this.isApplyEAndonDashboard =
//             params?.find((item) => item['functionality'] === 'EANDON_DASHBOARD' && item['module'] === 'DASHBOARDS')?.applied || false;
//         this.isApplyProjectDashboard =
//             params?.find((item) => item['functionality'] === 'PROJECT_DASHBOARD' && item['module'] === 'DASHBOARDS')?.applied || false;
//     }
// }
