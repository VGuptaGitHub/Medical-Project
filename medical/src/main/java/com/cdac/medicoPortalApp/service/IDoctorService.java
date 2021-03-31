package com.cdac.medicoPortalApp.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.cdac.medicoPortalApp.pojos.Doctor;

@Service
public interface IDoctorService {

	public Doctor saveDoctor(Doctor doctor);
	public Doctor fetchDoctorByEmailId(String email);
	public Doctor fetchDoctorByEmailIdAndPassword(String email, String password);
	public Doctor fetchDoctorByUsernameAndPassword(String username, String password);
	public boolean approveAppointment(int id);
	public boolean rejectAppointment(int id);
	public Doctor getDoctor(int doctorId);
	public List<Doctor> getAllApprovedDr();
	public List<Doctor> getAllPendingDr();
	public List<Doctor> getAllRejectedDr();
}
