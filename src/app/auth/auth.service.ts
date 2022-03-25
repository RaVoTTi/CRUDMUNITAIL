import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';
import { IResponse } from 'src/interfaces/response.interface';
import { IUser, IUserLogin } from 'src/interfaces/auth.interface';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _apiUrl = environment.apiUrl;

  private _user: IUser | undefined;
  private _token: string | undefined;

  private _headers: HttpHeaders = new HttpHeaders()
    .set('super-token', localStorage.getItem('super-token') || '')

  get user() {
    return { ...this._user! }
  }
  get token() {
    return this._token!
  }

  constructor(private http: HttpClient) {


  }

  get headers() {
    return this._headers
  }

  verifyJWT(): Observable<boolean> {
    if (!localStorage.getItem('super-token')) {
      return of(false)
      // return false
    }
    return of(true)
    // TODO
    // return true

  }

  login(userLogin: IUserLogin): Observable<IResponse<IUser>> {
    return this.http.post<IResponse<IUser>>(`${this._apiUrl}/api/auth`, userLogin).pipe(
      tap((response) => {
        if(!response.token){
          this._user = response.result[0];
          this._token = response.token;
          localStorage.setItem('super-token', this._token!)
        }
      }),
    );
  }
}
