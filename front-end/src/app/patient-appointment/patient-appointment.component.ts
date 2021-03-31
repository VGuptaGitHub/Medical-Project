import { Component, OnInit } from '@angular/core';
import { Appointment } from '../appointment';
import { AppointmentService } from '../appointment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-appointment',
  templateUrl: './patient-appointment.component.html',
  styleUrls: ['./patient-appointment.component.scss']
})
export class PatientAppointmentComponent implements OnInit {

  appointment: Appointment = new Appointment();
  appointmentListApproved: Appointment[];
  nullMessage: string = "YAY ! You seem to have no more Appointments";
  listEmpty: boolean;


  constructor(private appointmentService: AppointmentService) { }

  ngOnInit(): void {
    this.getPatientAppointments();
  }

 public getPatientAppointments(){
   this.appointmentService.getPatientAppointments().subscribe(data=> {
     this.appointmentListApproved = data;
   });
 }


}
