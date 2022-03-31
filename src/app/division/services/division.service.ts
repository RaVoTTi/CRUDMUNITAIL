import { AuthService } from './../../auth/auth.service';
import { IDivision } from './../../../interfaces/division.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { catchError, Observable, of } from 'rxjs';
import { IResponse } from 'src/interfaces/response.interface';

@Injectable({
  providedIn: 'root',
})
export class DivisionService {
  
  private _apiUrl: string = `${environment.apiUrl}/api/division/`
  
  
  
  
  
  constructor(private http: HttpClient, private authService: AuthService) {
    
   }

  divisionGet(): Observable<IResponse<IDivision>> {
    return this.http.get<IResponse<IDivision>>(this._apiUrl, { headers: this.authService.headers }).pipe(
      catchError((err) => of((err.error) as IResponse<IDivision>))
    );
  }
  divisionPut(id: string, name: {}): Observable<IResponse<IDivision>> {
    return this.http.put<IResponse<IDivision>>(this._apiUrl + id, { name }, { headers: this.authService.headers }).pipe(
      catchError((err) => of((err.error) as IResponse<IDivision>))
    );
  }
  divisionPost(name: {}): Observable<IResponse<IDivision>> {
    return this.http.post<IResponse<IDivision>>(this._apiUrl, { name }, { headers: this.authService.headers }).pipe(
      catchError((err) => of((err.error) as IResponse<IDivision>))
    );
  }
  divisionDelete(id: string): Observable<IResponse<IDivision>> {
    return this.http.delete<IResponse<IDivision>>(this._apiUrl + id, { headers: this.authService.headers }).pipe(
      catchError((err) => of((err.error) as IResponse<IDivision>))
    );
  }

}
