import { Component, OnInit } from '@angular/core';
import { Patient } from '../../app/patient';
import { PatientService } from '../patient.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.scss']
})
export class PatientProfileComponent implements OnInit {

  patientId: number
  patient: Patient

  constructor(private route: ActivatedRoute, private patientService: PatientService, private router: Router) { }

  ngOnInit(): void {
    // this.patientId = this.route.snapshot.params['patientId'];
    this.patientId = parseInt(sessionStorage.getItem("patientId"));
    this.patient = new Patient();
    this.patientService.getPatientById(this.patientId).subscribe(data => {
      this.patient = data;
      console.log(this.patient);
    });

  }
  updatePatient(patientId: number) {
    this.router.navigate(['patient/edit-profile']);
  }

  toHomePage() {
    this.router.navigate(['patient/home']);
  }





}
