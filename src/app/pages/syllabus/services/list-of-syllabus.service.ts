import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'enviroments/environment.prod';
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
export class ListOfSyllabusService {

  urlSyllabus = "https://fa-backend-deplpoy.azurewebsites.net/api/Syllabus";
  //  environment.syllabusUrl;
  constructor(private http: HttpClient) {}
  getSyllabus(){
    return this.http.get<any[]>(this.urlSyllabus + '/GetAllSyllabus');
  }
  deleteSyllabus(id: string): Observable<Object> {
    const params = new HttpParams().set('id', id);
    return this.http.delete<Object>(this.urlSyllabus + '/DeleteSyllabus', {
      params: params,
    });
  }
  searchSyllabus(name: string): Observable<Object> {
    const params = new HttpParams().set('Name', name);
    return this.http.get<Object>(this.urlSyllabus + '/SearchByName', {
      params: params,
    });
  }
}
