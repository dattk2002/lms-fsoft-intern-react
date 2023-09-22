import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class ErrorService {
    getClientErrorMessage(error: Error): string {
        return error.message ? error.message : error.toString();
    }

    getServerErrorMessage(error: HttpErrorResponse): string {
        return navigator.onLine ? error.message : 'There was a problem with your network connection!';
    }
}
