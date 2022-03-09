import { AuthService } from './../../auth/auth.service';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
} from '@angular/router';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private router:Router ,private authService: AuthService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    
    
    
    return this.authService.verifyJWT().pipe(
      tap( auth => {
        if (!auth){
          this.router.navigate(['./auth'])
        }
      })
    );

    
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.verifyJWT().pipe(
      tap( auth => {
        if (!auth){
          this.router.navigate(['./auth'])
        }
      })
    );

  }
}
