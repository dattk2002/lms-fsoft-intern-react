import {
  Component,
  Inject,
  OnInit,
  Optional,
  ViewEncapsulation,
  AfterViewInit,
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { FilterService } from 'primeng/api';
import * as _ from 'lodash';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { LayoutService } from '../layout.service';
// import { SIDE_NAV_CONFIG } from './config';
import { MenuItem } from '../../models/menu-item';
import { SafeAny } from '../../models/any';
import { AccountService } from '../../auth/services/account.service';
import { SIDE_NAV_MENU_ITEMS } from 'src/app/config/side-nav.config';
import { SIDE_NAV_CONFIG } from './config';

enum RouteCheckBySetting {
  HOME = '/home',
  SYLLABUS = '/syllabus',
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: SIDE_NAV_CONFIG,
      useValue: SIDE_NAV_MENU_ITEMS,
    },
  ],
})
export class SidebarComponent implements OnInit, AfterViewInit {
  sideNavItems: MenuItem[];

  filteredGroups: any[];

  selected: SafeAny[] = [];

  isNavbarVisible: boolean = false;

  listRouteCheckBySetting = RouteCheckBySetting;

  sideNavConfig$ = this.layoutService.getNavConfig$();

  listParentRouteCheckBySetting: any[] = [
    this.listRouteCheckBySetting.HOME,
    this.listRouteCheckBySetting.SYLLABUS,
  ];

  //SIDE_NAV_MENU_ITEMS
  constructor(
    private accountService: AccountService,
    public layoutService: LayoutService,
    private router: Router,
    @Inject(SIDE_NAV_CONFIG) private SIDE_NAV_ITEMS: MenuItem[],
    private filterService: FilterService,
    private http: HttpClient
  ) {}

  ngAfterViewInit(): void {}

  ngOnInit(): void {
    this.layoutService.setNavConfig(this.SIDE_NAV_ITEMS);
    this.sideNavConfig$.subscribe((res) => {
      this.sideNavItems = _.cloneDeep(res);
    });

    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.layoutService.toggleTopNavbar(true);
      }
    });
  }

  checkVisibleMenuItem(menuItem: MenuItem) {
    if (!menuItem.authorities) {
      return true;
    }

    const hasPermission = this.accountService.hasAnyAuthority(
      menuItem.authorities
    );
    if (!hasPermission) {
      return false;
    }

    if (menuItem.items?.length) {
      menuItem.items.forEach((item) => {
        if (item.items?.length) {
          item.items = item.items?.filter((record) => {
            if (!record.authorities) {
              return true;
            }
            return this.accountService.hasAnyAuthority(record.authorities);
          });
        }
      });
      menuItem.items = menuItem.items.filter((record) => {
        if (!record.authorities) {
          return true;
        }
        return this.accountService.hasAnyAuthority(record.authorities);
      });
    }

    return true;
  }

  onMouseEnter() {
    this.layoutService.toggleSidebarHover(true);
  }

  onMouseLeave() {
    this.layoutService.toggleSidebarHover(false);
  }

  *deepGetItems(routingGroup: any) {
    yield routingGroup.items;
    if (routingGroup.items && routingGroup.items.length) {
      // eslint-disable-next-line no-restricted-syntax
      for (const item of routingGroup.items) {
        if (item.items) {
          yield* this.deepGetItems(item);
        }
      }
    }
  }

  handleSelected(e) {
    // const list = this.sideNavItems.filter((x) => x.id === 'temp');
    // list?.map((x) => (x.items = undefined));
    console.log(e)
    this.router.navigate([e.routerLink]);
    this.selected = [];
  }

  checkRole(authorities: string[]) {
    return this.accountService.hasAnyAuthority(authorities);
  }

  pinNavbar() {
    this.layoutService.toggleSideNav();
  }

  checkStatusNavbarVisible() {
    // if (window.location.href.includes('/home')) {
    //     return !this.layoutService._sideNavVisible$.value;
    // }
    return this.layoutService._sideNavVisible$.value;
  }
}
