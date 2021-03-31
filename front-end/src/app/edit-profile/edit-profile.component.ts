import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  patientId: number;
  patient: Patient = new Patient();

  constructor(private patientService: PatientService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    // this.patientId = this.route.snapshot.params['patientId'];
    this.patientId = parseInt(sessionStorage.getItem("patientId"));
    this.patient = new Patient();
    this.patientService.getPatientById(this.patientId).subscribe(data => {
      this.patient = data;
    }, error => console.log(error));
  }

  onSubmit() {
    this.patientService.updatePatient(this.patientId, this.patient).subscribe(data => {

    }
      , error => console.log(error));
    this.router.navigate(['patient/profile']);

  }

  goBack() {
    this.router.navigate(['patient/profile']);
  }

}
