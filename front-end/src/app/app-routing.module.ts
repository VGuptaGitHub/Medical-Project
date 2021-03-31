import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { DoctorProfileComponent } from './doctor-profile/doctor-profile.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PatientHomeComponent } from './patient-home/patient-home.component';
import { PatientLoginComponent } from './patient-login/patient-login.component';
import { PatientRegisterComponent } from './patient-register/patient-register.component';
import { PatientProfileComponent } from './patient-profile/patient-profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { IndexComponent } from './index/index.component';
import { AuthguardPatientService } from '../app/authguard-patient.service';
import { AuthguardDoctorService } from '../app/authguard-doctor.service';
import { AuthguardAdminService } from '../app/authguard-admin.service';
import { DoctorLoginComponent } from './doctor-login/doctor-login.component';
import { DoctorRegisterComponent } from './doctor-register/doctor-register.component';
import { DoctorHomeComponent } from './doctor-home/doctor-home.component';
import { ViewAppointmentComponent } from './view-appointment/view-appointment.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { PendingDoctorsComponent } from './pending-doctors/pending-doctors.component';
import { combineLatest } from 'rxjs';
import { ApprovedDoctorComponent } from './approved-doctor/approved-doctor.component';
import { RejectedDoctorComponent } from './rejected-doctor/rejected-doctor.component';
import { AppointmentsLogComponent } from './appointments-log/appointments-log.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { PatientAppointmentComponent} from './patient-appointment/patient-appointment.component';
import { CoronaTrackerComponent } from './corona-tracker/corona-tracker.component';

const routes: Routes = [
  { path: "navbar", component: NavBarComponent },
  { path: "patient/login", component: PatientLoginComponent },
  { path: "patient/register", component: PatientRegisterComponent },
  { path: "patient/home", component: PatientHomeComponent, canActivate: [AuthguardPatientService] },
  { path: "patient/doctor-list", component: DoctorListComponent, canActivate: [AuthguardPatientService] },
  { path: "patient/view/doctor-profile/:doctorId", component: DoctorProfileComponent, canActivate: [AuthguardPatientService] },
  { path: "patient/bookAppointment/:doctorId", component: BookAppointmentComponent, canActivate: [AuthguardPatientService] },
  { path: "patient/profile", component: PatientProfileComponent, canActivate: [AuthguardPatientService] },
  { path: "patient/edit-profile", component: EditProfileComponent, canActivate: [AuthguardPatientService] },
  { path: "index", component: IndexComponent },
  { path: "", component: IndexComponent },
  { path: "doctor/login", component: DoctorLoginComponent },
  { path: "doctor/register", component: DoctorRegisterComponent },
  { path: "doctor/home", component: DoctorHomeComponent, canActivate: [AuthguardDoctorService] },
  { path: "doctor/view-appointment", component: ViewAppointmentComponent, canActivate: [AuthguardDoctorService] },
  { path: "doctor/appointmentLog", component: AppointmentsLogComponent },
  { path: "admin/login", component: AdminLoginComponent },
  { path: "admin/home", component: AdminHomeComponent, canActivate: [AuthguardAdminService] },
  { path: "admin/pending", component: PendingDoctorsComponent, canActivate: [AuthguardAdminService] },
  { path: "admin/approved", component: ApprovedDoctorComponent, canActivate: [AuthguardAdminService] },
  { path: "admin/rejected", component: RejectedDoctorComponent, canActivate: [AuthguardAdminService] },
  { path: "aboutus", component: AboutusComponent },
  { path: "patient/appointment", component: PatientAppointmentComponent},
  { path: "corona", component: CoronaTrackerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }