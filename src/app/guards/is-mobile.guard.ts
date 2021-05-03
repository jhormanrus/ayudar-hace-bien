import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IsMobileGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const userAgent = navigator.userAgent || navigator.vendor
    if (/android/i.test(userAgent)) {
      return true
    }
    if (/iPhone/.test(userAgent) && !window.MSStream) {
      return true
    }
    this.router.navigate(['h'])

  }

}
