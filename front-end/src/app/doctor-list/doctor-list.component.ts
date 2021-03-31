import { Component, OnInit } from '@angular/core';
import { Doctor } from '../doctor';
import { DoctorService } from '../doctor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.scss']
})
export class DoctorListComponent implements OnInit {

  doctors: Doctor[];
  constructor(private doctorService: DoctorService, private router: Router) { }

  ngOnInit(): void {
    this.getPendingDoctors();
  }

  public getPendingDoctors() {

    this.doctorService.getDoctorList().subscribe(data => {
      this.doctors = data;
      console.log("Reached");

    });
  }
  doctorDetails(doctorId: number) {
    this.router.navigate(['patient/view/doctor-profile', doctorId]);
  }
  bookAppointment(doctorId: number) {
    this.router.navigate(['patient/bookAppointment', doctorId]);
  }

}
