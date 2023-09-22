import { environment } from './../../../../../../../enviroments/environment.prod';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FilterProgramService {
  constructor(private http: HttpClient) {}

  urlTraining = 'https://fa-backend-deplpoy.azurewebsites.net/api/TrainingProgram';

  getFilteredPrograms(keyword: string): Observable<any[]> {
    return this.http
      .get<Object[]>(this.urlTraining + '/Search', {
        params: new HttpParams().set('searchString', keyword),
      })
      .pipe(catchError(this.handleError));
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
