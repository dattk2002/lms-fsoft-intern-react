import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams, } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterTrainingClassServiceService {
  urlClass = "https://deploy-fa-training.azurewebsites.net/api/TrainingClass"
  // urlClass = environment.classUrl;

  constructor(private http: HttpClient) { }

  postFilter(filter: any): Observable<any[]> {
    // return this.http.<any[]>(this.urlClass + '/FilterResult');
    return this.http.post<any>(this.urlClass + '/FilterResult', filter)
    .pipe(
      catchError(this.handleError)
    );
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
