import { Component, OnInit } from '@angular/core';
import { Doctor } from '../doctor';
import { DoctorService } from '../doctor.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';




@Component({
  selector: 'app-doctor-login',
  templateUrl: './doctor-login.component.html',
  styleUrls: ['./doctor-login.component.scss']
})
export class DoctorLoginComponent implements OnInit {

  doctor: Doctor = new Doctor();
  invalidLogin = false
  message: any

  constructor(private doctorService: DoctorService, private router: Router, private http: HttpClient) {

  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.saveDoctor();
  }

  saveDoctor() {
    this.doctorService.loginDoctor(this.doctor).subscribe(data => {
      
      console.log("data :"+data);
      this.message = data;
    var obj = this.message;
    //  console.log("message "+obj.message);
      // if (obj.message == "null") {
      //   this.router.navigate(['doctor/login']);
      // } else {
         sessionStorage.setItem("doctorId", obj.id);
        this.router.navigate(['doctor/home']);
        console.log(this.message);
    //  }

    },
      error => {console.log("in err "+error);
      alert("Invalid Login");
      this.router.navigate(['doctor/login']);
    });
  }








}
