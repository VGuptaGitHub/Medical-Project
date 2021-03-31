import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-register',
  templateUrl: './patient-register.component.html',
  styleUrls: ['./patient-register.component.scss']
})
export class PatientRegisterComponent implements OnInit {

  patient: Patient = new Patient();
  constructor(private patientService: PatientService, private router: Router) { }

  ngOnInit(): void {
  }

  savePatient() {
    this.patientService.insertPatient(this.patient).subscribe(data => {
      console.log(data);
    },
      error => console.log(error));
    this.router.navigate(['patient/login']);
  }


  goBack() {
    this.router.navigate(['patient/login']);
  }

  onSubmit() {
    console.log(this.patient);
    this.savePatient();

  }

}
