import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
    selector: 'app-error-404',
    templateUrl: './error-404.component.html',
    styleUrls: ['error-404.component.scss'],
})
export class Error404Component implements OnInit {
    constructor(public location: Location) {}

    ngOnInit() {}
}
