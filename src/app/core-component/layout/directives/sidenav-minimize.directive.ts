import { Directive, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { NavigationService } from '../../services/navigation.service';
import { LayoutService } from '../layout.service';

@UntilDestroy()
@Directive({
  selector: '[appSidebarMinimize]',
})
export class SidebarMinimizeDirective implements OnInit, OnDestroy {
  @HostBinding('class.sidebar_minimize') sidebarMinimize = false;

  @HostBinding('class.sidebar_minimize_hover') sidebarMinimizeHover = false;

  @HostBinding('class.nav_open') navOpen = false;

  @HostBinding('class.topbar_open') topbarOpen = false;

  @HostBinding('class.overlay-sidebar') overlay = false;

  constructor(
    private layoutService: LayoutService,
    private navigation: NavigationService
  ) {}

  ngOnInit(): void {
    this.navigation.routeData$().subscribe((routeData) => {
      // if (Object.prototype.hasOwnProperty.call(routeData, 'sidebarOverlay') && routeData.sidebarOverlay === false) {
      //     this.overlay = true;
      //     this.layoutService.setSideNavVisible(false);
      // } else {
      this.overlay = false;
      // this.layoutService.setSideNavVisible(false);
      // }
    });

    this.layoutService
      .sideNavVisible$()
      .pipe(untilDestroyed(this))
      .subscribe((visible) => {
        this.sidebarMinimize = !visible;
      });
    this.layoutService
      .sideNavOpen$()
      .pipe(untilDestroyed(this))
      .subscribe((visible) => {
        this.navOpen = !visible;
        // this.topbarOpen = false;
      });
    this.layoutService
      .topNavbarVisible$()
      .pipe(untilDestroyed(this))
      .subscribe((visible) => {
        this.topbarOpen = !visible;
        // this.navOpen = false;
      });

    this.layoutService
      .sidebarHover$()
      .pipe(untilDestroyed(this))
      .subscribe((isHover: boolean) => {
        // if (!this.sidebarMinimize) {
        //     return;
        // }
        this.sidebarMinimizeHover = isHover;
      });
  }

  ngOnDestroy(): void {}
}
