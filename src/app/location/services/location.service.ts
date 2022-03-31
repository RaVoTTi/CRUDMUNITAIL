import { AuthService } from './../../auth/auth.service';
import { ILocationPopulate, ILocation } from 'src/interfaces/location.interface';

import { catchError, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IResponse } from 'src/interfaces/response.interface';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  private _apiUrl = environment.apiUrl + '/api/location/';
  constructor(private http: HttpClient, private authService: AuthService) { }

  locationGet(): Observable<IResponse<ILocationPopulate>> {
    return this.http.get<IResponse<ILocationPopulate>>(this._apiUrl, { headers: this.authService.headers }).pipe(
      catchError((err) => of((err.error) as IResponse<ILocationPopulate>))
    )
  }
  locationGetById(id: string): Observable<IResponse<ILocationPopulate>> {
    return this.http.get<IResponse<ILocationPopulate>>(this._apiUrl + id, { headers: this.authService.headers }).pipe(
      catchError((err) => of((err.error) as IResponse<ILocationPopulate>))
    )
  }
  locationPost(locationPost: ILocation): Observable<IResponse<ILocation>> {
    return this.http.post<IResponse<ILocation>>(
      this._apiUrl,
      locationPost,
      { headers: this.authService.headers }).pipe(
        catchError((err) => of((err.error) as IResponse<ILocation>))
      )
  }
  locationPut(
    id: string,
    locationPut: ILocation,
  ): Observable<IResponse<ILocation>> {
    return this.http.put<IResponse<ILocation>>(
      this._apiUrl + id,
      locationPut,
      { headers: this.authService.headers }).pipe(
        catchError((err) => of((err.error) as IResponse<ILocation>))
      )
  }
  locationDelete(id: string): Observable<IResponse<ILocation>> {
    return this.http.delete<IResponse<ILocation>>(this._apiUrl + id, {
      headers: this.authService.headers,
    }).pipe(
      catchError((err) => of((err.error) as IResponse<ILocation>))
    )
  }
}
