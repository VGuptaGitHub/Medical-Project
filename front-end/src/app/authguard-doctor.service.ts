import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '../app/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardDoctorService {

  constructor(private router: Router, private authService: AuthenticationService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authService.isDoctorLoggedIn())
      return true;

    this.router.navigate(['doctor/login']);
    return false;
  }
}
