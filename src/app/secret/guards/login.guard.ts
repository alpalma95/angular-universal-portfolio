import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { map, Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate {
  userIsLoggedIn: boolean = false;
  constructor(private authService: AuthService, private router: Router) {
    this.authService.userIsLoggedIn$.subscribe(
      (val) => (this.userIsLoggedIn = val)
    );
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.userIsLoggedIn) this.router.navigate(['secret', 'secret']);
    return !this.userIsLoggedIn;
  }
}
