import { LocationGet } from 'src/interfaces/location.interface';
import { RESTLocation, LocationPost, RESTGetLocation } from './../../../interfaces/location.interface';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private _headers : HttpHeaders = new HttpHeaders()
  .set('super-token', localStorage.getItem('super-token') || '')
  private _apiUrl = environment.apiUrl
  constructor(private http:HttpClient) { }

  getLocation(): Observable<RESTLocation>{
    return this.http.get<RESTLocation>(`${this._apiUrl}/location`)
  }
  getLocationById(id:string): Observable<RESTGetLocation>{
    return this.http.get<RESTGetLocation>(`${this._apiUrl}/location/${id}`)
  }
  postLocation(locationPost:LocationPost): Observable<RESTGetLocation>{
    return this.http.post<RESTGetLocation>(`${this._apiUrl}/location`,locationPost, {headers: this._headers})
  }
  putLocation(locationPut:LocationPost, id:string): Observable<RESTGetLocation>{
    return this.http.put<RESTGetLocation>(`${this._apiUrl}/location/${id}`, locationPut, {headers: this._headers})
  }
}

