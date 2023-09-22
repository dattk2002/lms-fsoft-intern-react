import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from './../../../../../enviroments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class TrainingProgramServiceService {



  urlTrainning = "https://fa-backend-deplpoy.azurewebsites.net/api/TrainingProgram"
  //  environment.trainingUrl;
  // API_URL = 'http://localhost:3000';
  baseUrl: any;
  constructor(private http: HttpClient) {}
  getTraining(): Observable<Object> {
    return this.http.get<Object>(this.urlTrainning + '/GetAllTrainingProgram');
    // return this.http.get<Object>(this.API_URL + '/data');
  }


  // urlTrainning = environment.trainingUrl;
  urlTrainingDetail: string;


  // getTrainingDetail(): Observable<Object> {

  //   return this.http.get<Object>(this.urlTrainning + '/GetDetail', { params: new HttpParams().set("trainingProgramId", "d7c136bf-8c7f-4a36-8b80-0197c5b2e7e2") });
  //   // return this.http.get<Object>(this.API_URL + '/detail');
  // }
  getTrainingDetail(trainingProgramId: string): Observable<Object> {
    const params = new HttpParams().set("trainingProgramId", trainingProgramId);
    return this.http.get<Object>(this.urlTrainning + '/GetDetail', { params: params });
    //  return this.http.get<Object>(this.API_URL + '/GetDetail');
  }
  // getTrainingDetail(trainingProgramId: string): Observable<Object> {
  //   return this.http.get(`${this.baseUrl}/training-programs/${trainingProgramId}`);
  // }

  deleteTrainingProgram(trainingProgramId: string): Observable<Object> {
    const params = new HttpParams().set("trainingProgramId", trainingProgramId);
    return this.http.delete<Object>(this.urlTrainning + '/Delete', { params: params });
    //  return this.http.get<Object>(this.API_URL + '/Delete');
  }
  // updateTrainingProgram(updateId: string, body: any): Observable<any> {
  //   const url = `${this.urlTrainning}/Update/${updateId}`;
  //   return this.http.patch(url, body);
  // }
  updateTrainingProgram(updateId: string, body: any): Observable<Object> {
    const params = new HttpParams().set("updateId", updateId);
    const options = { params: params };
    return this.http.patch<Object>(`${this.urlTrainning}/Update`, body, options);
  }

  // updateTrainingProgram(updateId: string, body: any): Observable<Object> {
  //   const params = new HttpParams().set("updateId", updateId);
  //   return this.http.patch<Object>(this.urlTrainning + '/Update',body , {params: params});

  // }

  DuplicateTrainingProgram(id: string): Observable<Object> {
    const params = new HttpParams().set("id", id);
    return this.http.post<Object>(this.urlTrainning + '/Duplicate','' , {params: params});

  }
  searchTrainingProgram(searchString: string): Observable<Object> {
    const params = new HttpParams().set('searchString', searchString);
    return this.http.get<Object>(this.urlTrainning + '/Search', {
      params: params,
    });
  }

}
