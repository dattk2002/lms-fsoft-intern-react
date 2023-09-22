import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginDemoService {
  constructor(private http: HttpClient) {}

  // API_URL = 'https://deploy-fa-training.azurewebsites.net/api/Users/Login';
  API_URL = 'https://fa-backend-deplpoy.azurewebsites.net/api/Users/Login';
  API_URL1 = 'https://deploy-fa-training.azurewebsites.net/api/Users/ForgotPassword';
  API_URL2 = 'https://deploy-fa-training.azurewebsites.net/api/Users/ResetPassword';
  getLogin(form: any): Observable<any> {
    return this.http.post<any>(this.API_URL, form);
  }
  getForgot(email: string): Observable<any>{
    const params = new HttpParams().set("email", email);
    return this.http.get<any>(this.API_URL1, { params: params });
  }
  getRecover(form: any): Observable<any> {
    return this.http.post<any>(this.API_URL2, form);
  }
}
