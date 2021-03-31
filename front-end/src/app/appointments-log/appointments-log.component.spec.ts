import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentsLogComponent } from './appointments-log.component';

describe('AppointmentsLogComponent', () => {
  let component: AppointmentsLogComponent;
  let fixture: ComponentFixture<AppointmentsLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppointmentsLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentsLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
