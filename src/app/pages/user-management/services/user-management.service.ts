import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserManagementService {

  constructor(private http: HttpClient) {}
  API_URL = 'https://deploy-fa-training.azurewebsites.net/api/Users/Search';
  getSearch(keyword: string): Observable<any> {
    // const data = {
    //   UserName: 'test',
    //   Password: '123',
    // };
    // console.log(form);

    return this.http.get(this.API_URL, {
      params: new HttpParams().set('searchString', keyword)
  });
  }

}
