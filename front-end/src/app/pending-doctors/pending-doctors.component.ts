import { Component, OnInit } from '@angular/core';
import { Doctor } from '../doctor';
import { DoctorService } from '../doctor.service';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-pending-doctors',
  templateUrl: './pending-doctors.component.html',
  styleUrls: ['./pending-doctors.component.scss']
})
export class PendingDoctorsComponent implements OnInit {

  doctors: Doctor[];
  constructor(private doctorService: DoctorService, private adminService: AdminService, private router: Router) { }

  ngOnInit(): void {
    this.getPendingDoctors();
  }

  public getPendingDoctors() {
    this.doctorService.getPendingDoctorList().subscribe(data => {
      this.doctors = data;
    });

  }

  public acceptDoctor(doctorId: number) {
    console.log(doctorId);
    this.adminService.approveDoctor(doctorId).subscribe(data => {
      console.log(data);
      console.log("Doctor Approved");
      window.location.reload();
    })
  }

  public rejectDoctor(doctorId: number) {
    console.log(doctorId);
    this.adminService.rejectDoctor(doctorId).subscribe(data => {
      console.log(data);
      console.log("Doctor Rejected");
      window.location.reload();
    })
  }


}
