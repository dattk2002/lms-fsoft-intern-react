import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

/* Guards */
import * as authGuards from './guards';

/* Services */
import * as authServices from './services';

@NgModule({
    imports: [CommonModule, RouterModule],
    providers: [...authServices.services, ...authGuards.guards],
    declarations: [],
    exports: [],
})
export class AuthModule {}
