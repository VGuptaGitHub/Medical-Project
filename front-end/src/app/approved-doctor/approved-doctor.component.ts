import { Component, OnInit } from '@angular/core';
import { Doctor } from '../doctor';
import { DoctorService } from '../doctor.service';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-approved-doctor',
  templateUrl: './approved-doctor.component.html',
  styleUrls: ['./approved-doctor.component.scss']
})
export class ApprovedDoctorComponent implements OnInit {

  doctors: Doctor[];
  constructor(private doctorService: DoctorService, private adminService: AdminService, private router: Router) { }

  ngOnInit(): void {
    this.getApprovedDoctors();
  }

  public getApprovedDoctors() {
    this.doctorService.getApprovedDoctorList().subscribe(data => {
      this.doctors = data;
    });

  }





}
