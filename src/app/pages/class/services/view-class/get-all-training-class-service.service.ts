import { environment } from 'enviroments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetAllTrainingClassServiceService {
  [x: string]: any;
  urlClass = "https://backend-api-fa-training-system.azurewebsites.net/api/TrainingClass";
  // urlClass = environment.classUrl;
  // API_URL = 'http://localhost:3000/data';

  constructor(private http: HttpClient) {}

  getClass(): Observable<any[]> {
    return this.http.get<any[]>(this.urlClass + '/GetAllTraningClass');
    // return this.http.get<any[]>(this.API_URL);
  }

  searchClass(name: string): Observable<Object> {
    const params = new HttpParams().set('Name', name);
    return this.http.get<Object>(this.urlClass + '/SearchClassByName', {
      params: params,
    });
  }

  duplicateClass(id: string): Observable<Object> {
    const params = new HttpParams().set('id', id);
    return this.http.post<Object>(this.urlClass + '/DuplicateClass', '', {
      params: params,
    });
  }

  deleteClass(trainingClassId: string): Observable<Object> {
    const params = new HttpParams().set('trainingClassId', trainingClassId);
    return this.http.delete<Object>(
      this.urlClass + '/SoftRemoveTrainingClass',
      {
        params: params,
      }
    );
  }
}
