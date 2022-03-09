import { RESTDivision } from './../../../interfaces/division.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DivisionService {
  private _apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {}
  
  divisionGet(): Observable<RESTDivision> {
    return this.http.get<RESTDivision>(`${this._apiUrl}/division`);
  }
}
