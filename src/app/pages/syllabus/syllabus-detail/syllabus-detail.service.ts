import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'enviroments/environment';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs/internal/observable/throwError';
import { catchError } from 'rxjs/internal/operators/catchError';

@Injectable({
  providedIn: 'root'
})
export class SyllabusDetailService {
  [x: string]: any;
  urlSyllabusDetail ="https://fa-backend-deplpoy.azurewebsites.net/api/Syllabus";
  // environment.syllabusUrl;
  constructor(private http: HttpClient) {}


  getAllSyllabusDetail(SyllabusId: string){
    const params = new HttpParams().set('SyllabusId', SyllabusId);
    return this.http.get<Object>(this.urlSyllabusDetail + '/ViewDetail', {
      params: params,
    });
  }
  deleteSyllabus(id: string): Observable<Object> {
    const params = new HttpParams().set('id', id);
    return this.http.delete<Object>(this.urlSyllabusDetail + '/DeleteSyllabus', {
      params: params,
    });
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
