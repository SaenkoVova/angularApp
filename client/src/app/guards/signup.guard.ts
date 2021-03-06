import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class SignupGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return new Observable<boolean>(observer => {
      if (this.authService.getAuthStateFromLocalStorage().isAuth) {
        observer.next(false);
        this.router.navigate(['/']);
      } else {
        observer.next(true);
      }
    });
  }
}
