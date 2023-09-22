import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GetListOfSyllabusesTestService {
  constructor(private http: HttpClient) {}

  API_URL =
    'http://localhost:3000/data';

  getSyllabus(): Observable<Object[]> {
    return this.http
      .get<Object[]>(this.API_URL)
      .pipe(catchError(this.handleError));
  }

  editSyllabus(body: string) {
    return this.http
      .post(this.API_URL, body)
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
