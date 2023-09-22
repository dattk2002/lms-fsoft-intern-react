import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RippleModule } from 'primeng/ripple';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { BadgeModule } from 'primeng/badge';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { SidebarMinimizeDirective } from './directives/sidenav-minimize.directive';
import { SidebarMenuComponent, SidebarMenuItemComponent } from './sidebar/sidebar-menu/sidebar-menu.component';

import { PageHeaderComponent } from './page-header/page-header.component';
import { ToggleNavDirective } from './directives/toggle-sidenav.directive';
import { SharedModule } from 'src/app/shared/shared.module';
import { NavbarComponent } from './navbar/navbar.component';

const components = [
    HeaderComponent,
    SidebarComponent,
    SidebarMenuComponent,
    SidebarMenuItemComponent,
    PageHeaderComponent,
    NavbarComponent
];

const directives = [SidebarMinimizeDirective, ToggleNavDirective];

@NgModule({
    declarations: [...components, ...directives],
    exports: [...components, ...directives],
    imports: [
        CommonModule,
        RouterModule,
        RippleModule,
        BreadcrumbModule,
        BadgeModule,
        SharedModule,
    ],
    providers: [
    ],
})
export class LayoutModule {}
