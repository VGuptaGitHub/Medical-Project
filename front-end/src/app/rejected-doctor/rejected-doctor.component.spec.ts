import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectedDoctorComponent } from './rejected-doctor.component';

describe('RejectedDoctorComponent', () => {
  let component: RejectedDoctorComponent;
  let fixture: ComponentFixture<RejectedDoctorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RejectedDoctorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RejectedDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
