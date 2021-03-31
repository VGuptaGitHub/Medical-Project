import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patient } from './patient';
@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private baseURL = "http://localhost:8080/patient";

  constructor(private http: HttpClient) { }

  insertPatient(patient: Patient): Observable<Object> {
    return this.http.post(`${this.baseURL}` + "/add_patient", patient);
  }

  loginPatient(patient: Patient): Observable<Object> {
    return this.http.post(`${this.baseURL}` + "/login", patient);
  }

  getPatientById(patientId: number): Observable<Patient> {
    return this.http.get<Patient>(`${this.baseURL}` + "/patient_profile/" + `${patientId}`);
  }
  updatePatient(patientId: number, patient: Patient): Observable<Object> {
    return this.http.put(`${this.baseURL}` + "/patient_update/" + `${patientId}`, patient);
  }

  loginuser() {
  }
}