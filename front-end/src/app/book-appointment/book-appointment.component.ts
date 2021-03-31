import { Component, OnInit } from '@angular/core';
import { Appointment } from '../appointment';
import { AppointmentService } from '../appointment.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Patient } from '../patient';
import { Doctor } from '../doctor';

@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.scss']
})
export class BookAppointmentComponent implements OnInit {

  appointment: Appointment = new Appointment();

  constructor(private appointmentService: AppointmentService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {


  }
  onSubmit() {
    this.appointment.patient=new Patient();
    this.appointment.doctor=new Doctor();
    this.appointment.status = -1;
    this.appointment.patient.id = parseInt(sessionStorage.getItem('patientId'));
    this.appointment.doctor.id = this.route.snapshot.params['doctorId'];
    this.appointmentService.insertAppointment(this.appointment).subscribe(data => {
      console.log(data);
    }, error => console.log(error));
    this.router.navigate(['patient/doctor-list']);

  }


}
