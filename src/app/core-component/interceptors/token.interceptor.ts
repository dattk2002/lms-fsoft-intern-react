import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
  HttpErrorResponse,
  HttpStatusCode,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../auth/services/auth.service';
import { SafeAny } from '../models/any';
import { retryBackoff } from '../utils/operators/retryBackoff';
import { AccountService } from '../auth/services';

export const INIT_INTERVAL_MS = 2 * 1000; // 2 sec
export const MAX_INTERVAL_MS = 8 * 1000; // 8 sec

function isHttpError(error: {}): error is HttpErrorResponse {
  return (error as HttpErrorResponse).status !== undefined;
}

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private accountService: AccountService) {}

  intercept(
    request: HttpRequest<SafeAny>,
    next: HttpHandler
  ): Observable<HttpEvent<SafeAny>> {
    let authReq = request;
    const token = this.accountService.getToken();
    if (token != null) {
      authReq = this.addTokenHeader(authReq, token);
    }
    return next.handle(authReq).pipe(
      retryBackoff({
        initialInterval: INIT_INTERVAL_MS,
        maxInterval: MAX_INTERVAL_MS,
        maxRetries: 3,
        shouldRetry: (error) => {
          // error could be anything, including HttpError that
          if (isHttpError(error)) {
            // If this is HttpError and status is InternalServerError
            // then continue retrying
            return error.status === HttpStatusCode.Unauthorized;
          }
          // should retry for the rest of the types of errors.
          return true;
        },
      }),
      catchError((error: HttpErrorResponse) => {
        switch (error.status) {
          case HttpStatusCode.Unauthorized:
            this.accountService.logout();
            break;
          default:
            break;
        }
        return throwError(error);
      })
    );
  }

  private addTokenHeader(request: HttpRequest<any>, token: string) {
    return request.clone({
      headers: request.headers.set('Authorization', 'Bearer ' + token),
    });
  }
}
