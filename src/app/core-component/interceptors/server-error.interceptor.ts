import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpRequest, HttpHandler, HttpInterceptor, HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CustomError, SafeAny } from '../models';
import { NotificationService } from '../services';
import { retryBackoff } from '../utils';
import { HTTP_ERROR_RESPONSE } from '../constants';
// import { NotificationService } from '@core/services';
// import { HttpStatusCode, HTTP_ERROR_RESPONSE } from '@core/constants';
// import { CustomError } from '@core/models';
// import { retryBackoff } from '@core/utils';
// import { SafeAny } from '@core/models/any';

export const INIT_INTERVAL_MS = 2 * 1000; // 2 sec
export const MAX_INTERVAL_MS = 8 * 1000; // 8 sec

function isHttpError(error: {}): error is HttpErrorResponse {
    return (error as HttpErrorResponse).status !== undefined;
}

@Injectable()
export class ServerErrorInterceptor implements HttpInterceptor {
    constructor(private injector: Injector) {}

    intercept(request: HttpRequest<SafeAny>, next: HttpHandler): Observable<HttpEvent<SafeAny>> {
        // const notifier = this.injector.get(NotificationService);
        const notifier = this.injector.get(NotificationService);

        return next.handle(request).pipe(
            retryBackoff({
                initialInterval: INIT_INTERVAL_MS,
                maxInterval: MAX_INTERVAL_MS,
                maxRetries: 2,
                shouldRetry: (error) => {
                    // error could be anything, including HttpError that
                    if (isHttpError(error)) {
                        // If this is HttpError and status is InternalServerError
                        // then continue retrying
                        return error.status >= HttpStatusCode.InternalServerError;
                    }
                    // should retry for the rest of the types of errors.
                    return true;
                },
            }),
            catchError((error: HttpErrorResponse) => {
                if (!navigator.onLine) {
                    notifier.showWarn('network-problem');
                    return throwError(error);
                }
                switch (error.status) {
                    // case HttpStatusCode.InternalServerError:
                    //     notifier.showError(errorService.getServerErrorMessage(error));
                    //     break;
                    // TBD
                    // case HttpStatusCode.BadGateway:
                    //     break;
                    // case HttpStatusCode.NotFound:
                    //     break;
                    // case HttpStatusCode.Unauthorized:
                    //     break;
                    case HttpStatusCode.BadRequest:
                        this.badRequestHandle(error, notifier);
                        break;
                    default:
                        // this.showCommonError(notifier);
                        break;
                }
                return throwError(error);
            })
        );
    }

    badRequestHandle(err: any, notifier: any) {
        const error = err.error?.data as CustomError;
        let parseResult;
        switch (error?.code) {
            case HTTP_ERROR_RESPONSE.BAD_REQUEST_ITEM_ALREADY_EXISTS:
                parseResult = this.parserMessage(1, error);
                if (error?.params?.field) {
                    notifier.showError(
                       ''
                    );
                } else {
                    // this.showCommonError(notifier, transloco);
                }
                break;
            default:
                // this.showCommonError(notifier, transloco);
                break;
        }
    }

    // showCommonError(_notifier, _transloco) {
    //     // notifier.showError(transloco.translate('message.error'));
    // }

    parserMessage(type: any, error: any, funcName?: any) {
        if (!error?.code) {
            // break parser.
            return {};
        }
        /**
         * @description
         * @param type - 1: unique using field, 2: using field, 3: default: not using field
         */
        /**
         * @desciption
         * @param error - has error.params.numberRow then Import Excel
         * */
        let field = error?.params?.field;
        if (type === 1) {
            field = `unique-id.${error?.params?.field}`;
        } else if (type === 2 && funcName) {
            field = `${funcName}.${error?.params?.field}`;
        }
        let numberRow;
        let message;
        if (error?.params?.numberRow) {
            message = `message.excel.${error.code}`;
            numberRow = error?.params?.numberRow;
        } else {
            message = `message.${error.code}`;
        }

        return {
            field,
            message,
            numberRow,
        };
    }
}
