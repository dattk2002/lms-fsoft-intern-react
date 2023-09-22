import { ErrorHandler, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import {
  DEFAULT_TIMEOUT,
  TimeoutInterceptor,
} from './interceptors/timeout.interceptor';
import { ServerErrorInterceptor } from './interceptors/server-error.interceptor';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { HTTP_REQUEST_TIMEOUT } from './constants';
import { GlobalErrorHandler } from './services/global-error-handler';

/* Services */
import * as services from './services';
import { AuthModule } from './auth/auth.module';
import { LayoutModule } from './layout/layout.module';
import { SharedModule } from '../shared/shared.module';

/* Import static components like the navbar, footer, etc */
/**
 * The CoreModule is designed for your singleton services shared throughout the application.
 * The CoreModule takes on the role of the app root module, but is not the module that gets bootstrapped by Angular at run-time.
 * The common denominator between the files present here is that we only need to load them once,
 *  and that is at run-time, which makes them singleton.
 * The module contains root-scoped services, static components like the navbar and
 *  footer, interceptors, guard, constants, enums, utils, and universal models.
 * To prevent re-importing the module elsewhere, we should add a module-import-guard in it’s constructor method.
 * In short, when using a Core Module:
 *    DO import modules that should be instantiated once in app.
 *    DO place services in the module, but do not provide them.
 *    DO NOT import the CoreModule into any modules other than the AppModule.
 */
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    AuthModule,
    /* 3rd party libraries */
    ToastModule,
    ConfirmDialogModule,
    /* End 3rd party libraries */
    LayoutModule,
    SharedModule
  ],
  providers: [
    { provide: DEFAULT_TIMEOUT, useValue: HTTP_REQUEST_TIMEOUT },
    { provide: HTTP_INTERCEPTORS, useClass: TimeoutInterceptor, multi: true },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ServerErrorInterceptor,
      multi: true,
    },
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: ErrorHandler, useClass: GlobalErrorHandler },
    /* Some Singleton Service  */
    ...services.services,
    MessageService,
    ConfirmationService,
    /* End some Singleton Service  */
  ],
  exports: [
    LayoutModule
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only'
      );
    }
  }
}
