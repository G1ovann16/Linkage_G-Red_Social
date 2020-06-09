import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }
  canActivate() {
    if (localStorage.getItem('authToken')) {
      // logged in so return true
      return true;
      }
      // not logged in so redirect to login page
      this.router.navigate(['/register']);
      return false;
  }

}
