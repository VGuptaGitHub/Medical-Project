import { TestBed } from '@angular/core/testing';

import { AuthguardDoctorService } from './authguard-doctor.service';

describe('AuthguardDoctorService', () => {
  let service: AuthguardDoctorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthguardDoctorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
