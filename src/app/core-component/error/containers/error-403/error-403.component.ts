import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
    selector: 'app-error-403',
    template: `
        <div class="error-layout">
            <div class="error-layout_inner">
                <div class="error-layout_title">403</div>
                <div class="error-layout_desc">Access Denied</div>
                <div class="error-layout_content">Sorry, but you don't have permission to access this page</div>
                <p-button
                    label="Return to previous page"
                    icon="fa fa-arrow-left"
                    (click)="location.back()"
                    styleClass="p-button-link"
                ></p-button>
            </div>
        </div>
    `,
    styleUrls: ['./error-403.component.scss'],
})
export class Error403Component implements OnInit {
    constructor(public location: Location) {}

    ngOnInit(): void {}
}
