import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-patient-login',
  templateUrl: './patient-login.component.html',
  styleUrls: ['./patient-login.component.scss']
})
export class PatientLoginComponent implements OnInit {

  patient: Patient = new Patient();
  invalidLogin = false
  message: any
  appointments: any


  constructor(private patientService: PatientService, private router: Router, private http: HttpClient) {

  }

  savePatient() {
    this.patientService.loginPatient(this.patient).subscribe(data => {
      console.log("in patient login");
     
   //   console.log(data);
      this.message = data;
      console.log(this.message.id);
  //    var obj = this.message;
  //    console.log(obj.message);
      //  if (obj.message == "null") {
      //     this.router.navigate(['patient/login']);
      //  } else {
      sessionStorage.setItem("patientId", this.message.id);//madhura
      this.router.navigate(['patient/home']);
      console.log(this.message);
      //   }


    },
      error => {
        console.log(error);
        this.router.navigate(['patient/login']);
      });
  }

  onSubmit() {
    console.log(this.patient);
    this.savePatient();
  }


  ngOnInit(): void {
  }


}
