import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateSyllabusService {
  constructor(private http: HttpClient) {}
  API_URL ='https://deploy-fa-training.azurewebsites.net/api/Syllabus/AddNewSyllabus';

  getaddSyllabus(form: any): Observable<any> {
    return this.http.post<any>(this.API_URL, form);
  }
}
