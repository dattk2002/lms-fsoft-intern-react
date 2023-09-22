import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CreateTrainingProgramSyllabusService {

  constructor(private http: HttpClient) {}
  API_URL = 'http://localhost:3000/SyllabusList';
  TOKEN = '';

  getprogram(){
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
