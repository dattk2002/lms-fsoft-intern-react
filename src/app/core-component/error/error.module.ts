import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

/* Modules */

/* Containers */
import * as errorContainers from './containers';

@NgModule({
    imports: [SharedModule, RouterModule],
    declarations: [...errorContainers.containers],
    exports: [...errorContainers.containers],
})
export class ErrorModule {}
