import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovedDoctorComponent } from './approved-doctor.component';

describe('ApprovedDoctorComponent', () => {
  let component: ApprovedDoctorComponent;
  let fixture: ComponentFixture<ApprovedDoctorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovedDoctorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovedDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
