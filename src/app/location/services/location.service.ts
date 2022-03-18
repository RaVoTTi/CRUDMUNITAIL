import { AuthService } from './../../auth/auth.service';
import { LocationGet } from 'src/interfaces/location.interface';
import {
  RESTLocation,
  LocationPost,
  RESTGetLocation,
} from './../../../interfaces/location.interface';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  private _apiUrl = environment.apiUrl;
  constructor(private http: HttpClient, private authService: AuthService) {}

  getLocation(): Observable<RESTLocation> {
    return this.http.get<RESTLocation>(`${this._apiUrl}/location`);
  }
  getLocationById(id: string): Observable<RESTGetLocation> {
    return this.http.get<RESTGetLocation>(`${this._apiUrl}/location/${id}`);
  }
  postLocation(locationPost: LocationPost): Observable<RESTGetLocation> {
    return this.http.post<RESTGetLocation>(
      `${this._apiUrl}/location`,
      locationPost,
      { headers: this.authService.headers }
    );
  }
  putLocation(
    locationPut: LocationPost,
    id: string
  ): Observable<RESTGetLocation> {
    return this.http.put<RESTGetLocation>(
      `${this._apiUrl}/location/${id}`,
      locationPut,
      { headers: this.authService.headers }
    );
  }
  delLocation(id: string): Observable<RESTGetLocation> {
    return this.http.delete<RESTGetLocation>(`${this._apiUrl}/location/${id}`, {
      headers: this.authService.headers,
    });
  }
}
