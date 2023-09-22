import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
    selector: 'app-error-500',
    templateUrl: './error-500.component.html',
    styleUrls: ['error-500.component.scss'],
})
export class Error500Component implements OnInit {
    message: string;

    constructor(public location: Location) {}

    ngOnInit() {}
}
