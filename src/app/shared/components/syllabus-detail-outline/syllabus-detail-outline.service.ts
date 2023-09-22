import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/internal/operators/catchError';

@Injectable({
  providedIn: 'root'
})
export class SyllabusDetailOutlineService {
  constructor(private http: HttpClient) {}
  API_URL = 'http://localhost:3000/data';
  TOKEN = '';


  getAllSyllabusDetail(){
    return this.http.get<any>(this.API_URL, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.TOKEN),
    })
    .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse){
    let errorMessage = ' An error occurred ';
    if (error.error instanceof ErrorEvent){
      errorMessage = `Error: ${error.error.message}`;
    } else{
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console .error(errorMessage);
    return throwError(errorMessage);
  }
}
