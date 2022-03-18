import { UserLogin, RESTAuth, User } from './../../interfaces/auth.interface';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _apiUrl = environment.apiUrl;

  private _user: User | undefined;
  private _token: string | undefined ;

  private _headers : HttpHeaders = new HttpHeaders()
  .set('super-token', localStorage.getItem('super-token') || '')

  get user(){
    return {...this._user!}
  }
  get token(){
    return this._token!
  }

  constructor(private http: HttpClient) {
    
    
  }

  get headers(){
    return this._headers
  }

  verifyJWT(): Observable<boolean> {
    if (!localStorage.getItem('super-token')){
      return of(false)
      // return false
    }
    return of(true)
    // TODO
    // return true

  }
  

  login(userLogin: UserLogin): Observable<RESTAuth> {
    return this.http.post<RESTAuth>(`${this._apiUrl}/auth/login`, userLogin).pipe(
      tap((response) => {
        this._user = response.user;
        this._token = response.token;
      }),
      tap(( _ ) => localStorage.setItem('super-token', this.token)),
    );
  }
}
