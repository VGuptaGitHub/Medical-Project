import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Doctor } from './doctor';
import { Appointment } from './appointment';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  private baseURL = "http://localhost:8080/doctor";
  constructor(private httpClient: HttpClient) { }

  getDoctorList(): Observable<Doctor[]> {
    return this.httpClient.get<Doctor[]>(`${this.baseURL}` + "/doctor_list/approved");
  }
  getDoctorById(doctorId: number): Observable<Doctor> {
    return this.httpClient.get<Doctor>(`${this.baseURL}` + "/get_doctor/" + `${doctorId}`);

  }

  getPendingDoctorList(): Observable<Doctor[]> {
    return this.httpClient.get<Doctor[]>(`${this.baseURL}` + "/doctor_list/pending");
  }

  getApprovedDoctorList(): Observable<Doctor[]> {
    return this.httpClient.get<Doctor[]>(`${this.baseURL}` + "/doctor_list/approved");
  }

  getRejectedDoctorList(): Observable<Doctor[]> {
    return this.httpClient.get<Doctor[]>(`${this.baseURL}` + "/doctor_list/rejected");
  }



  loginDoctor(doctor: Doctor): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}` + "/login", doctor);
  }

  saveDoctor(doctor: Doctor): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}` + "/register", doctor);
  }

  acceptAppointment(appointmentId: number): Observable<Appointment> {
    return this.httpClient.get<Appointment>(`${this.baseURL}` + "/acceptAppointment/" + `${appointmentId}`);
  }

  rejectAppointment(appointmentId: number): Observable<Appointment> {
    return this.httpClient.get<Appointment>(`${this.baseURL}` + "/declineAppointment/" + `${appointmentId}`);
  }


}
