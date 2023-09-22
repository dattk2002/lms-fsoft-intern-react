import { catchError } from 'rxjs/operators';
import { environment } from './../../../../../../enviroments/environment.prod';
import { Observable, throwError } from 'rxjs';
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GetClassDetailService {
  // urlClass = environment.classUrl;
  urlClass = 'https://fa-backend-deplpoy.azurewebsites.net/api/TrainingClass'
  // API_URL = 'http://localhost:3000/data';
  constructor(private http: HttpClient) {}

  getTraining(id: string): Observable<Object> {
    return this.http
      .get<Object>(this.urlClass + '/GetTrainingClassDetail', {
        params: new HttpParams().append('id', id),
      })
      .pipe(catchError(this.handleError));
    // return this.http.get<Object>(this.API_URL);
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An error occurred';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
