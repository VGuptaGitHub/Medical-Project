import { Component, OnInit } from '@angular/core';
import { Appointment } from '../appointment';
import { AppointmentService } from '../appointment.service';

import { Router } from '@angular/router';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-view-appointment',
  templateUrl: './view-appointment.component.html',
  styleUrls: ['./view-appointment.component.scss']
})
export class ViewAppointmentComponent implements OnInit {

  appointment: Appointment = new Appointment();
  appointmentsList: Appointment[];
  nullMessage: string = "YAY ! You seem to have no more Appointments";
  listEmpty: boolean;

  constructor(private appService: AppointmentService, private drService: DoctorService, private router: Router) { }

  ngOnInit(): void {
    this.appService.getPendingList().subscribe(data => {
      if (data == null) {
        this.listEmpty = true;
      }
      else {
        this.listEmpty = false;
      }
      this.appointmentsList = data;
    });
  }


  // viewAppointmentsById(appointmentId: number) {

  //   this.appService.getAppointmentById(appointmentId).subscribe(data => {
  //     this.appointment = data;
  //     console.log(this.appointment);
  //   });
  // }

  acceptAppointment(appointmentId: number) {
    console.log("in accept "+appointmentId);
    this.drService.acceptAppointment(appointmentId).subscribe(data => {
      console.log("Accepted");
      console.log(data);
      window.location.reload();

    });
  }

  rejectAppointment(appointmentId: number) {
    this.drService.rejectAppointment(appointmentId).subscribe(data => {
      console.log("Rejected");
      console.log(data);
      window.location.reload();
    })
  }

}
