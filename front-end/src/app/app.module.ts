import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PatientLoginComponent } from './patient-login/patient-login.component';
import { PatientRegisterComponent } from './patient-register/patient-register.component';
import { PatientHomeComponent } from './patient-home/patient-home.component';
import { LoggedNavComponent } from './logged-nav/logged-nav.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { DoctorProfileComponent } from './doctor-profile/doctor-profile.component';
import { FooterComponent } from './footer/footer.component';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';
import { PatientProfileComponent } from './patient-profile/patient-profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { IndexComponent } from './index/index.component';
import { DoctorLoginComponent } from './doctor-login/doctor-login.component';
import { DoctorRegisterComponent } from './doctor-register/doctor-register.component';
import { DoctorHomeComponent } from './doctor-home/doctor-home.component';
import { ViewAppointmentComponent } from './view-appointment/view-appointment.component';
import { DocNavbarComponent } from './doc-navbar/doc-navbar.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { PendingDoctorsComponent } from './pending-doctors/pending-doctors.component';
import { ApprovedDoctorComponent } from './approved-doctor/approved-doctor.component';
import { RejectedDoctorComponent } from './rejected-doctor/rejected-doctor.component';
import { AdminNavComponent } from './admin-nav/admin-nav.component';
import { AppointmentsLogComponent } from './appointments-log/appointments-log.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { PatientAppointmentComponent } from './patient-appointment/patient-appointment.component';
import { CoronaTrackerComponent } from './corona-tracker/corona-tracker.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PatientLoginComponent,
    PatientRegisterComponent,
    PatientHomeComponent,
    LoggedNavComponent,
    DoctorListComponent,
    DoctorProfileComponent,
    FooterComponent,
    BookAppointmentComponent,
    PatientProfileComponent,
    EditProfileComponent,
    IndexComponent,
    DoctorLoginComponent,
    DoctorRegisterComponent,
    DoctorHomeComponent,
    ViewAppointmentComponent,
    DocNavbarComponent,
    AdminLoginComponent,
    AdminHomeComponent,
    PendingDoctorsComponent,
    ApprovedDoctorComponent,
    RejectedDoctorComponent,
    AdminNavComponent,
    AppointmentsLogComponent,
    AboutusComponent,
    PatientAppointmentComponent,
    CoronaTrackerComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
