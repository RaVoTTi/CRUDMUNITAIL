import { AuthService } from './../../auth/auth.service';
import { IDivision} from './../../../interfaces/division.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { IResponse } from 'src/interfaces/response.interface';

@Injectable({
  providedIn: 'root',
})
export class DivisionService {
  private _apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient, private authService: AuthService) {}
  
  divisionGet(): Observable<IResponse<IDivision>> {
    return this.http.get<IResponse<IDivision>>(`${this._apiUrl}/api/division`,  {headers: this.authService.headers});
  }
  divisionPut(id:string, name : {}): Observable<IResponse<IDivision>> {
    return this.http.put<IResponse<IDivision>>(`${this._apiUrl}/api/division/${id}`,{name},  {headers: this.authService.headers} );
  }
  divisionPost(name : {} ): Observable<IResponse<IDivision>> {
    return this.http.post<IResponse<IDivision>>(`${this._apiUrl}/api/division`, {name} , {headers: this.authService.headers});
  }
  divisionDelete(id: string ): Observable<IResponse<IDivision>> {
    return this.http.delete<IResponse<IDivision>>(`${this._apiUrl}/api/division/${id}`,{headers: this.authService.headers});
  }

}
