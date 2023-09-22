/* eslint-disable @angular-eslint/directive-selector */
import { Directive, ElementRef, OnInit } from '@angular/core';
import { NavigationService } from '../services/navigation.service';

@Directive({ selector: '[activeNav]' })
export class ActiveNavDirective implements OnInit {
    constructor(private elementRef: ElementRef, private navigation: NavigationService) {}

    ngOnInit() {
        this.elementRef.nativeElement.style.display = 'none';
        this.checkAccess();
    }

    checkAccess() {
        this.navigation.routeData$().subscribe((routeData?: any) => {
            if (Object.prototype.hasOwnProperty.call(routeData, 'activeNav') && routeData.activeNav === false) {
                this.elementRef.nativeElement.style.display = 'none';
            } else {
                this.elementRef.nativeElement.style.display = 'block';
            }
        });
    }
}
