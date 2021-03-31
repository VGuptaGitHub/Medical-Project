import { Component, OnInit } from '@angular/core';
import { Doctor } from '../doctor';
import { DoctorService } from '../doctor.service';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-rejected-doctor',
  templateUrl: './rejected-doctor.component.html',
  styleUrls: ['./rejected-doctor.component.scss']
})
export class RejectedDoctorComponent implements OnInit {

  doctors: Doctor[];
  constructor(private doctorService: DoctorService, private adminService: AdminService, private router: Router) { }

  ngOnInit(): void {
    this.getRejectedDoctors();
  }

  public getRejectedDoctors() {
    this.doctorService.getRejectedDoctorList().subscribe(data => {
      this.doctors = data;
    });

  }

}
