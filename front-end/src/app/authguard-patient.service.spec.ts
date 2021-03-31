import { TestBed } from '@angular/core/testing';

import { AuthguardPatientService } from './authguard-patient.service';

describe('AuthguardPatientService', () => {
  let service: AuthguardPatientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthguardPatientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
