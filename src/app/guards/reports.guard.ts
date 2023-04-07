import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportsGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // return true;
    let patient = JSON.parse(localStorage.getItem('patient')!);
    let user = JSON.parse(localStorage.getItem('user')!);
    if (patient || user.role == 'patient') {
      return true;
    }
    else {
      return false;
    }
  }

}
