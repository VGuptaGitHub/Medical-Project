import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-logged-nav',
  templateUrl: './logged-nav.component.html',
  styleUrls: ['./logged-nav.component.scss']
})
export class LoggedNavComponent implements OnInit {
  id: String;
  constructor(private router: Router, private authService: AuthenticationService) { }

  ngOnInit(): void {
  }

  logout() {
    this.authService.logOutPatient();
    this.router.navigate(['index']);

  }

  getPatientAppointment(){
    this.router.navigate(['patient/appointment']);
  }

}
