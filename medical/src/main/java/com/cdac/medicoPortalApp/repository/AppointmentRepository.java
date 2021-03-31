package com.cdac.medicoPortalApp.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cdac.medicoPortalApp.pojos.Appointment;

public interface AppointmentRepository extends JpaRepository<Appointment,  Integer>{
  
	public List<Appointment> findByDoctorIdAndStatus(int id,int status);
	public List<Appointment> findByIdAndDoctorId(int appointmentId,int doctorId);
	public List<Appointment> findByPatientIdAndStatus(int id,int status);
}
