package com.cdac.medicoPortalApp.controller;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.medicoPortalApp.pojos.Patient;
import com.cdac.medicoPortalApp.service.IPatientService;

@RestController
@CrossOrigin
@RequestMapping("/patient")
public class PatientController {

	@Autowired
	private IPatientService patientService;
	
	@PostMapping(value="add_patient")
	@Transactional
	public String addPatient(@RequestBody Patient patient) {
		patientService.addPatient(patient);
		return "success";
	}
	@PostMapping(value="/login")
	public Patient loginPatient(@RequestBody Patient patient) throws Exception{
		Patient retPatient=null;
		if(patient.getUserName()!=null && patient.getPassword()!= null) {
			String username=patient.getUserName();
			String password=patient.getPassword();
			retPatient=patientService.fetchUserByuserNameAndpassword(username, password);
		}
		
		if(retPatient==null) {
			throw new Exception("bad credentials");
			
		}
		return retPatient;
		
	}	
	@GetMapping(value="patient_profile/{patientId}")
	public Patient getPatient(@PathVariable int patientId) {
		return patientService.getPatient(patientId);
	}
	
	@PutMapping(value="patient_update/{patientId}")
	public String updatePatient(@RequestBody Patient patient) {
		patientService.modifyPatient(patient);
		return "success";
	}
	
	
}
