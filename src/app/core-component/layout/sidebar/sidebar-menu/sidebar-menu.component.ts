import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

import { Router } from '@angular/router';
import { MenuItem } from 'src/app/core-component/models/menu-item';
import { SafeAny } from 'src/app/core-component/models/any';
import { NavigationService } from 'src/app/core-component/services/navigation.service';

function routerLinkFilter(object, url) {
    if (Object.prototype.hasOwnProperty.call(object, 'routerLink') && url.includes(object.routerLink)) {
        return object;
    }

    for (let i = 0; i < Object.keys(object).length; i += 1) {
        if (typeof object[Object.keys(object)[i]] === 'object') {
            const o = routerLinkFilter(object[Object.keys(object)[i]], url);
            if (o != null) {
                return o;
            }
        }
    }

    return null;
}
export class BaseSideNavMenuItem {
    constructor(private ref: ChangeDetectorRef) {}

    handleExpand(item: MenuItem) {
        if (item.disabled || item.expanded) {
            return;
        }
        this.changeExpanded(item, false);
    }

    private changeExpanded(item: MenuItem, fromCLickEvent: boolean): void {
        if (fromCLickEvent) {
            item.expanded = !item.expanded;
        } else {
            item.expanded = true;
        }
        this.ref.detectChanges();
    }

    handleClick(event: SafeAny, item: MenuItem) {
        event.stopImmediatePropagation();
        if (item.disabled) {
            event.preventDefault();
            return;
        }

        this.changeExpanded(item, true);

        if (!item.url || !item.routerLink) {
            event.preventDefault();
        }

        if (item.command) {
            item.command({
                originalEvent: event,
                item,
            });
        }
    }
}

@Component({
    selector: 'app-sidebar-menu-item',
    template: `
        <ul
            [ngClass]="{ 'nav nav-collapse': true, subnav: !root }"
            [@submenu]="
                expanded
                    ? { value: 'visible', params: { transitionParams: transitionOptions, height: '*' } }
                    : { value: 'hidden', params: { transitionParams: transitionOptions, height: '0' } }
            "
            style="list-style: none; padding: 0px"
        >
            <ng-template ngFor let-child [ngForOf]="item.items">
                <li *ngIf="child.separator" class="nav-section" role="separator">
                    <span class="sidebar-mini-icon">
                        <i class="fa fa-ellipsis-h"></i>
                    </span>
                    <h4 class="text-section">{{ child.separatorLabel }}</h4>
                </li>
                <li
                    *ngIf="!child.separator"
                    [ngClass]="child.styleClass"
                    [class.hidden]="child.visible === false"
                    [ngStyle]="child.style"
                    routerLinkActive="active"
                    [ngClass]="{ 'nav-item-sub': true, submenu: child.expanded, 'p-disabled': child.disabled }"
                >
                    <a *ngIf="!child.routerLink && child.url" [href]="child.url" target="_blank" class="item-sub-menu" pRipple>
                        <i  [ngClass]="child.icon" *ngIf="child.icon"></i>
                        <span class="sub-item">{{ child.label }}</span>
                        <span class="caret" *ngIf="child.items && !child.badge"></span>
                        <span *ngIf="child.badge" [class]="child.badgeStyleClass" class="badge badge-success">{{ child.badge }}</span>
                    </a>
                    <a
                        *ngIf="!child.routerLink && !child.url"
                        class="item-sub-menu"
                        [attr.tabindex]="!item.expanded ? null : child.disabled ? null : '0'"
                        [attr.id]="child.id"
                        role="treeitem"
                        data-toggle="collapse"
                        [ngClass]="{ 'p-disabled': child.disabled }"
                        [attr.aria-expanded]="child.items && child.expanded"
                        (click)="child.items && handleClick($event, child)"
                        [attr.target]="child.target"
                        [attr.title]="child.title"
                        pRipple
                    >
                        <i [ngClass]="child.icon" *ngIf="child.icon"></i>
                        <span class="sub-item">{{ child.label }}</span>
                        <span class="caret" *ngIf="child.items && !child.badge"></span>
                        <span *ngIf="child.badge" [class]="child.badgeStyleClass" class="badge badge-success">{{ child.badge }}</span>
                    </a>
                    <a
                        *ngIf="child.routerLink"
                        [routerLink]="child.routerLink"
                        [queryParams]="child.queryParams"
                        [routerLinkActive]="'active'"
                        [routerLinkActiveOptions]="child.routerLinkActiveOptions || { exact: false }"
                        class="item-sub-menu"
                        data-toggle="collapse"
                        [ngClass]="{ 'p-disabled': child.disabled }"
                        [attr.tabindex]="!item.expanded ? null : child.disabled ? null : '0'"
                        [attr.id]="child.id"
                        role="treeitem"
                        [attr.aria-expanded]="child.items && child.expanded"
                        (click)="child.items && handleClick($event, child)"
                        [attr.target]="child.target"
                        [attr.title]="child.title"
                        [fragment]="child.fragment"
                        [queryParamsHandling]="child.queryParamsHandling"
                        [preserveFragment]="child.preserveFragment"
                        [skipLocationChange]="child.skipLocationChange"
                        [replaceUrl]="child.replaceUrl"
                        [state]="child.state"
                        pRipple
                    >
                        <i [ngClass]="child.icon" *ngIf="child.icon"></i>
                        <span class="sub-item">{{ child.label }}</span>
                        <span class="caret" *ngIf="child.items && !child.badge"></span>
                        <span *ngIf="child.badge" [class]="child.badgeStyleClass" class="badge badge-success">{{ child.badge }}</span>
                    </a>
                    <app-sidebar-menu-item
                        [item]="child"
                        [root]="false"
                        [expanded]="child.expanded"
                        [transitionOptions]="transitionOptions"
                        *ngIf="child.items"
                        [multiple]="multiple"
                        [autoExpanded]="autoExpanded"
                    ></app-sidebar-menu-item>
                </li>
            </ng-template>
        </ul>
    `,
    animations: [
        trigger('submenu', [
            state(
                'hidden',
                style({
                    height: '0',
                    overflow: 'hidden',
                })
            ),
            state(
                'visible',
                style({
                    height: '*',
                })
            ),
            transition('visible <=> hidden', [style({ overflow: 'hidden' }), animate('{{transitionParams}}')]),
            transition('void => *', animate(0)),
        ]),
    ],
    encapsulation: ViewEncapsulation.None,
})
export class SidebarMenuItemComponent extends BaseSideNavMenuItem implements OnInit {
    @Input() item: MenuItem;

    @Input() expanded: boolean;

    @Input() transitionOptions: string;

    @Input() root: boolean;

    @Input() multiple: boolean;

    @Input() autoExpanded: boolean;

    constructor(ref: ChangeDetectorRef, private navigationService: NavigationService) {
        super(ref);
    }

    ngOnInit() {
        if (this.autoExpanded) {
            this.navigationService.currentURL$().subscribe((url) => {
                const isActive = !!routerLinkFilter(this.item, url);
                if (!this.multiple && this.item.expanded && !isActive) {
                    this.item.expanded = false;
                }
                if (isActive && this.item.items.length && !this.item.expanded) {
                    super.handleExpand(this.item);
                }
            });
        }
    }
}

@Component({
    selector: 'app-sidebar-menu',
    template: `
        <div class="sidebar-content" style="margin-top: -1rem;">
            <ul class="nav nav-primary" style="list-style: none; padding: 0px">
                <ng-container *ngFor="let item of model; let f = first; let l = last">
                    <li
                        [ngClass]="{
                            'nav-item-active': isLinkActive(item.routerLinkActiveUrl),
                            'nav-item': true,
                            submenu: item.expanded,
                            'nav-item-disabled': item.disabled
                        }"
                        [class.hidden]="item.visible === false"
                        [class]="item.styleClass"
                        [ngStyle]="item.style"
                        routerLinkActive="active"
                    >
                        <a
                            *ngIf="!item.routerLink"
                            (click)="item.items && handleClick($event, item)"
                            [attr.tabindex]="item.disabled ? null : '0'"
                            [attr.target]="item.target"
                            [attr.title]="item.title"
                            data-toggle="collapse"
                            [attr.aria-expanded]="item.items && item.expanded"
                            [attr.aria-controls]="item.id"
                            pRipple
                        >
                            <i [ngClass]="item.icon" *ngIf="item.icon"></i>
                            <p class="font-weight-bold" style="margin: 0px; margin-left: 5px">{{ item.label }}</p>
                            <span class="caret" *ngIf="item.items && !item.badge"></span>
                            <span *ngIf="item.badge" [class]="item.badgeStyleClass" class="badge badge-success">{{ item.badge }}</span>
                        </a>
                        <a
                            *ngIf="item.routerLink"
                            [routerLink]="item.routerLink"
                            [queryParams]="item.queryParams"
                            [routerLinkActive]="'active'"
                            [routerLinkActiveOptions]="item.routerLinkActiveOptions || { exact: false }"
                            #rla="routerLinkActive"
                            (click)="item.items && handleClick($event, item)"
                            [attr.target]="item.target"
                            [attr.title]="item.title"
                            data-toggle="collapse"
                            [attr.aria-controls]="item.id"
                            [attr.aria-expanded]="item.expanded"
                            [attr.tabindex]="item.disabled ? null : '0'"
                            [fragment]="item.fragment"
                            [queryParamsHandling]="item.queryParamsHandling"
                            [preserveFragment]="item.preserveFragment"
                            [skipLocationChange]="item.skipLocationChange"
                            [replaceUrl]="item.replaceUrl"
                            [state]="item.state"
                            pRipple
                        >
                            <i [ngClass]="item.icon" *ngIf="item.icon"></i>
                            <p class="font-weight-bold" style="margin: 0px; margin-left: 5px">{{ item.label }}</p>
                            <span class="caret" *ngIf="item.items && !item.badge"></span>
                            <span *ngIf="item.badge" [class]="item.badgeStyleClass" class="badge badge-success">{{ item.badge }}</span>
                        </a>
                        <div
                            *ngIf="item.items"
                            [attr.id]="item.id"
                            [@rootItem]="
                                item.expanded
                                    ? { value: 'visible', params: { transitionParams: transitionOptions, height: '*' } }
                                    : { value: 'hidden', params: { transitionParams: transitionOptions, height: '0' } }
                            "
                        >
                            <app-sidebar-menu-item
                                [item]="item"
                                [expanded]="true"
                                [transitionOptions]="transitionOptions"
                                [root]="true"
                                [multiple]="multiple"
                                [autoExpanded]="autoExpanded"
                            >
                            </app-sidebar-menu-item>
                        </div>
                    </li>
                </ng-container>
            </ul>
        </div>
    `,
    animations: [
        trigger('rootItem', [
            state(
                'hidden',
                style({
                    height: '0',
                    overflow: 'hidden',
                })
            ),
            state(
                'visible',
                style({
                    height: '*',
                })
            ),
            transition('visible <=> hidden', [style({ overflow: 'hidden' }), animate('{{transitionParams}}')]),
            transition('void => *', animate(0)),
        ]),
    ],
    styleUrls: ['./sidebar-menu.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarMenuComponent extends BaseSideNavMenuItem {
    @Input() model: MenuItem[];

    @Input() style: SafeAny;

    @Input() styleClass: string | undefined;

    @Input() multiple = true;

    @Input() autoExpanded = true;

    transitionOptions = '300ms cubic-bezier(0.86, 0, 0.07, 1)';

    @Input() navVisible = false;

    @Input() navHover = false;

    constructor(ref: ChangeDetectorRef, private router: Router) {
        super(ref);
    }

    isLinkActive(url: string): boolean {
        return url && this.router.url.includes(url);
    }

    collapseAll() {
        this.model.forEach((item) => {
            if (item.expanded) {
                item.expanded = false;
            }
        });
    }

    // handleClick(event, item) {
    //     if (!this.multiple) {
    //         this.model.forEach((modelItem) => {
    //             if (item !== modelItem && modelItem.expanded) {
    //                 modelItem.expanded = false;
    //             }
    //         });
    //     }

    //     super.handleClick(event, item);
    // }
}
