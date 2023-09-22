import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'enviroments/environment';

@Injectable({
  providedIn: 'root'
})
export class CreateClassAddSyllabusService {
  trainingUrl = "https://deploy-fa-training.azurewebsites.net/api/TrainingProgram"
  // environment.trainingUrl;
  constructor(private http: HttpClient) {}
  getTrainingDetail(trainingProgramId: string){
    const params = new HttpParams().set('TrainingProgramId', trainingProgramId);
    return this.http.get<Object>(this. trainingUrl + '/GetDetail', {
      params: params,
    });
  }

}
