import { Directive, HostListener } from '@angular/core';
import { LayoutService } from '../layout.service';

@Directive({
    selector: '[appToggleSideNav]',
})
export class ToggleNavDirective {
    @HostListener('click', ['$event']) onClick($event) {
        // this.layoutSV.toggleNav(true);
        // this.layoutSV.toggleTopNavbar(true);
        // this.layoutSV.toggleSideNav(false);
        // if (window.location.href.includes('/home')) {
        //     this.layoutSV.toggleSideNav(false);
        // }
    }

    constructor(private layoutSV: LayoutService) {}
}
