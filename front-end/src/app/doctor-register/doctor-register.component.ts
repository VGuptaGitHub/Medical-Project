import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from '../doctor';
import { DoctorService } from '../doctor.service';


@Component({
  selector: 'app-doctor-register',
  templateUrl: './doctor-register.component.html',
  styleUrls: ['./doctor-register.component.scss']
})
export class DoctorRegisterComponent implements OnInit {

  doctor: Doctor = new Doctor();
  message: any;


  constructor(private router: Router, private doctorservice: DoctorService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.registerDoctor();
  }

  registerDoctor() {
    this.doctorservice.saveDoctor(this.doctor).subscribe(data => {
      this.message = data;
      console.log(this.message);
    },
      error => console.log(error));
    this.router.navigate(['doctor/login']);
  }

  goBack() {
    this.router.navigate(['doctor/login']);
  }

}
