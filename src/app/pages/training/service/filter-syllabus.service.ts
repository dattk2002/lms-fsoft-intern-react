import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { environment } from 'enviroments/environment.prod';
import { Observable, throwError } from 'rxjs';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FilterSyllabusService {

  constructor(private http: HttpClient) {}

  // urlTraining = environment.trainingUrl;
  urlTraining = 'https://fa-backend-deplpoy.azurewebsites.net/api/TrainingProgram'

  getFilteredSyllabus(keyword: string): Observable<any[]> {
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
