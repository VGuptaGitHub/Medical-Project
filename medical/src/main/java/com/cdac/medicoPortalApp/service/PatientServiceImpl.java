package com.cdac.medicoPortalApp.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cdac.medicoPortalApp.pojos.Patient;
import com.cdac.medicoPortalApp.repository.PatientRepository;

@Service
public class PatientServiceImpl implements IPatientService {

	@Autowired
	private PatientRepository patientRepo;
	
	
	@Override
	public void addPatient(Patient patient) {
		patientRepo.save(patient);
	}

	@Override
	public Patient fetchUserByuserNameAndpassword(String username, String password) {
		Patient patient = patientRepo.findByUserNameAndPassword(username, password);
		return patient;
		
	}

	@Override
	public Patient getPatient(int patientId) {
		Optional<Patient> o = patientRepo.findById(patientId);
		return o.get();
	}

	@Override
	public void modifyPatient(Patient patient) {
		patientRepo.save(patient);

	}

}
