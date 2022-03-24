import { AuthService } from './../../auth/auth.service';
import { ILocationPopulate, ILocation} from 'src/interfaces/location.interface';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IResponse } from 'src/interfaces/response.interface';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  private _apiUrl = environment.apiUrl;
  constructor(private http: HttpClient, private authService: AuthService) { }

  locationGet(): Observable<IResponse<ILocationPopulate>> {
    return this.http.get<IResponse<ILocationPopulate>>(`${this._apiUrl}/api/location`, { headers: this.authService.headers });
  }
  locationGetById(id: string): Observable<IResponse<ILocationPopulate>> {
    return this.http.get<IResponse<ILocationPopulate>>(`${this._apiUrl}/api/location/${id}`, { headers: this.authService.headers });
  }
  locationPost(locationPost: ILocation): Observable<IResponse<ILocation>> {
    return this.http.post<IResponse<ILocation>>(
      `${this._apiUrl}/api/location`,
      locationPost,
      { headers: this.authService.headers }
    );
  }
  locationPut(
    id: string,
    locationPut: ILocation,
  ): Observable<IResponse<ILocation>> {
    return this.http.put<IResponse<ILocation>>(
      `${this._apiUrl}/api/location/${id}`,
      locationPut,
      { headers: this.authService.headers }
    );
  }
  locationDelete(id: string): Observable<IResponse<ILocation>> {
    return this.http.delete<IResponse<ILocation>>(`${this._apiUrl}/api/location/${id}`, {
      headers: this.authService.headers,
    });
  }
}
