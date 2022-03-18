import { AuthService } from './../../auth/auth.service';
import { IdName, RESPONSEDivision, RESTDivision } from './../../../interfaces/division.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DivisionService {
  private _apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient, private authService: AuthService) {}
  
  divisionGet(): Observable<RESTDivision> {
    return this.http.get<RESTDivision>(`${this._apiUrl}/division`);
  }
  divisionPost(name : {} ): Observable<RESPONSEDivision> {
    return this.http.post<RESPONSEDivision>(`${this._apiUrl}/division`, {name} , {headers: this.authService.headers});
  }
  divisionDelete(id: string ): Observable<RESPONSEDivision> {
    return this.http.delete<RESPONSEDivision>(`${this._apiUrl}/division/${id}`,{headers: this.authService.headers});
  }

}
