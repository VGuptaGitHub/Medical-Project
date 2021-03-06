import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-home',
  templateUrl: './patient-home.component.html',
  styleUrls: ['./patient-home.component.scss']
})
export class PatientHomeComponent implements OnInit {

  constructor(private router: Router) { }

  viewDoctors() {
    this.router.navigate(['patient/doctor-list']);
  }


  ngOnInit(): void {
    
  }

}
