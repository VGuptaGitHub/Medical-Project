package com.cdac.medicoPortalApp.service;

import org.springframework.stereotype.Service;

import com.cdac.medicoPortalApp.pojos.Patient;

@Service
public interface IPatientService {

	public void addPatient(Patient patient);
	public Patient fetchUserByuserNameAndpassword(String username, String password);
	public Patient getPatient(int patientId);
	public void modifyPatient(Patient patient);
}
