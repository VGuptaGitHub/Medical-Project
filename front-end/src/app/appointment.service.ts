import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Appointment } from './appointment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  private baseURL = "http://localhost:8080/appointment";

  constructor(private http: HttpClient) { }

  insertAppointment(appointment: Appointment): Observable<Object> {
    return this.http.post(`${this.baseURL}` + "/add_appointment", appointment, { responseType: 'text' as 'json' });
  }

  getPendingList(): Observable<Appointment[]> {
    let doctorId;
    doctorId = sessionStorage.getItem("doctorId");
    return this.http.get<Appointment[]>(`${this.baseURL}` + "/pending/" + `${doctorId}`);
  }



  getAppointmentById(appointmentId: number): Observable<Appointment> {
    let doctorId;
    doctorId = sessionStorage.getItem("doctorId");
    return this.http.get<Appointment>(`${this.baseURL}` + "/pending/" + `${appointmentId}` + "/" + `${doctorId}`);
  }

  getApprovedAppointments(): Observable<Appointment[]> {
    let doctorId;
    doctorId = sessionStorage.getItem("doctorId");
    return this.http.get<Appointment[]>(`${this.baseURL}` + "/approved/" + `${doctorId}`);
  }

  getPatientAppointments(): Observable<Appointment[]> {
    let patientId;
    patientId = sessionStorage.getItem("patientId");
    return this.http.get<Appointment[]>(`${this.baseURL}` + "/patientApp/" + `${patientId}`);
  }

  getRejectedAppointments(): Observable<Appointment[]> {
    let doctorId;
    doctorId = sessionStorage.getItem("doctorId");
    return this.http.get<Appointment[]>(`${this.baseURL}` + "/rejected/" + `${doctorId}`);
  }



}
