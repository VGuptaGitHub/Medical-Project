import { Injectable } from '@angular/core';
import { Patient } from './patient';
import { PatientService } from './patient.service';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  patient: Patient = new Patient();

  constructor(private patientService: PatientService, private router: Router) { }

  isPatientLoggedIn() {
    let user = sessionStorage.getItem('patientId')
    console.log(!(user === null))
    return !(user === null)
  }

  logOutPatient() {
    sessionStorage.removeItem('patientId')
    this.router.navigate(['patient/login']);
  }

  isDoctorLoggedIn() {
    let user = sessionStorage.getItem('doctorId')
    console.log(!(user === null))
    return !(user === null)
  }

  logOutDoctor() {
    sessionStorage.removeItem('doctorId')
  }

  isAdminLoggedIn() {
    let user = sessionStorage.getItem('adminId')
    console.log(!(user === null))
    return !(user === null)
  }

  logOutAdmin() {
    sessionStorage.removeItem('adminId')
  }
}
