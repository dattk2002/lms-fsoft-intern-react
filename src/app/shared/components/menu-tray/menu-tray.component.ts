import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { timer } from 'rxjs';
import { AccountService } from 'src/app/core-component/auth/services/account.service';

export class MenuTray {
  routeLink: string;

  srcIcon: string;

  title: string;

  authorities?: string[] | string;

  url?: string;
}

@Component({
  selector: 'app-menu-tray',
  template: `
    <div class="menu-tray container-fluid pr-0 pl-0 h-100">
      <div
        class="row d-flex align-content-center flex-wrap justify-content-center no-gutters "
      >
        <div class="item {{ layout }}" *ngFor="let item of menuItems">
          <ng-container *ngIf="item.routeLink; else newTab">
            <a
              class="pt-4 box-blue"
              pRipple
              routerLink="[item.routeLink]"
              (click)="handelClick()"
            >
              <div
                class="icon-container d-flex align-items-center justify-content-center"
              >
                <img src="{{ item.srcIcon }}" />
              </div>
              <div class="text">
                <p>{{ item.title }}</p>
              </div>
            </a>
          </ng-container>
          <ng-template #newTab>
            <a class="pt-4 box-blue" pRipple [href]="item.url" target="_blank">
              <div
                class="icon-container d-flex align-items-center justify-content-center"
              >
                <img src="{{ item.srcIcon }}" />
              </div>
              <div class="text">
                <p>{{ item.title }}</p>
              </div>
            </a>
          </ng-template>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./menu-tray.component.scss'],
})
export class MenuTrayComponent implements OnChanges {
  @Input() config: MenuTray[];

  @Input() layout = 'col-12 col-sm-6 col-md-4 col-xl-4';

  menuItems: MenuTray[];

  constructor(private accountService: AccountService) {}
  ngOnChanges(changes: SimpleChanges): void {
    // if (changes. !== changes.previousValue) {
    //     this.bindingMenuItems();
    // }
    for (let propName in changes) {
      let change = changes[propName];
      let curVal = JSON.stringify(change.currentValue);
      let prevVal = JSON.stringify(change.previousValue);

      if (curVal !== prevVal) {
        this.bindingMenuItems();
      }
    }
  }

  bindingMenuItems() {
    this.menuItems = this.config.filter((item: MenuTray) => {
      if (!item.authorities) {
        return true;
      }
      return this.accountService.hasAnyAuthority(item.authorities);
    });
  }

  handelClick() {
    timer(50).subscribe(() => {
      // this.layoutService.toggleSideNav(false);
    });
  }
}
