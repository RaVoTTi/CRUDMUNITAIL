import { AuthService } from '../auth.service';
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
import { Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private router:Router ,private authService: AuthService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    
    
    return this.authService.verifyJWT().pipe(
      tap( auth => {
        if (auth !== true){
          this.router.navigateByUrl('/auth')
        }

      })
    );

    
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean>  | boolean {
    return this.authService.verifyJWT().pipe(
      tap( auth => {
        if (auth !== true){
          this.router.navigateByUrl('/auth')

        }
      })
    );

  }
}
