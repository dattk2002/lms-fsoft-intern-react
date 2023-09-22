import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { map } from 'rxjs/operators';
import { NavigationService } from '../../services/navigation.service';

@Component({
    selector: 'app-page-header',
    template: `
        <div class="page-header">
            <div class="text-nowrap">
                <h4 class="page-title">{{ title$ | async }}</h4>
            </div>
           
        </div>
    `,
    styles: [],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageHeaderComponent implements OnInit {
    title$ = this.navigationService.routeData$().pipe(map((res) => res.title ?? 'Title'));

    constructor(private navigationService: NavigationService) {}

    ngOnInit(): void {}
}
