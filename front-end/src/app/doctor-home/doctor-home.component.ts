import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor-home',
  templateUrl: './doctor-home.component.html',
  styleUrls: ['./doctor-home.component.scss']
})
export class DoctorHomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  viewAppointments() {
    this.router.navigate(['doctor/view-appointment']);
  }

}
