import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Admin } from '../app/admin';
import { Observable } from 'rxjs';
import { Doctor } from '../app/doctor';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private baseURL = "http://localhost:8080/admin";

  constructor(private http: HttpClient) { }

  adminLogin(admin: Admin): Observable<Object> {
    return this.http.post(`${this.baseURL}` + "/login", admin);
  }

  approveDoctor(doctorId: number): Observable<Doctor[]> {
    //console.log(`doctorId=${doctorId}`)
    return this.http.get<Doctor[]>(`${this.baseURL}` + "/approve-dr/" + `${doctorId}`);
   //return this.http.get<Doctor[]>(`${this.baseURL}` + "/approve-dr/1");
  }

  rejectDoctor(doctorId: number): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(`${this.baseURL}` + "/reject-dr/" + `${doctorId}`);
  }



}
