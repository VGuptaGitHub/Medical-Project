import { Component, OnInit } from '@angular/core';
import { Appointment } from '../appointment';
import { AppointmentService } from '../appointment.service';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-appointments-log',
  templateUrl: './appointments-log.component.html',
  styleUrls: ['./appointments-log.component.scss']
})
export class AppointmentsLogComponent implements OnInit {

  appointmentListApproved: Appointment[];
  appointmentListRejected: Appointment[];
  constructor(private appointmentService: AppointmentService, private adminService: AdminService, private router: Router) { }

  ngOnInit(): void {
    this.getApprovedAppointments();
    this.getRejectedAppointments();
  }

  public getApprovedAppointments() {
    this.appointmentService.getApprovedAppointments().subscribe(data => {
      this.appointmentListApproved = data;
    });

  }

  public getRejectedAppointments() {
    this.appointmentService.getRejectedAppointments().subscribe(data => {
      this.appointmentListRejected = data;
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
