import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { IResponse } from 'src/interfaces/response.interface';
import { IUser, IUserLogin } from 'src/interfaces/auth.interface';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _apiUrl = environment.apiUrl + '/api/auth/';


  private _headers: HttpHeaders = new HttpHeaders()
    .set('super-token', localStorage.getItem('super-token') || '')


  constructor(private http: HttpClient) {


  }

  get headers() {
    return this._headers
  }

  verifyJWT(): Observable<boolean> {
    const token = localStorage.getItem('super-token') || ''
    if (token === '') {
      return of(false)
    }
    const headers: HttpHeaders = new HttpHeaders()
      .set('super-token', token)
    return this.http.get<IResponse<IUser>>(this._apiUrl, { headers: this.headers })
      .pipe(
        tap((resp) => {
          if (resp.ok) {
            localStorage.setItem('super-token', resp.token!);
          }
        }),
        map(resp => resp.ok),
        catchError(err => of(false))
      );

  }

  login(userLogin: IUserLogin): Observable<IResponse<IUser>> {
    return this.http.post<IResponse<IUser>>(this._apiUrl, userLogin)
      .pipe(
        tap(resp => {
          if (resp.ok) {
            localStorage.setItem('super-token', resp.token!);
          }
        }),
        // map( resp => resp.ok ),
        catchError((err) => of((err) as IResponse<IUser>)),
      );
  }
}
