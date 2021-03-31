package com.cdac.medicoPortalApp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.medicoPortalApp.pojos.Doctor;
import com.cdac.medicoPortalApp.service.IDoctorService;

@RestController
@CrossOrigin
@RequestMapping("/doctor")
public class DoctorController {
  @Autowired
  private IDoctorService service;
  
  @PostMapping("/register")
  public Doctor registerDoctor(@RequestBody Doctor doctor) throws Exception {
	  String emailId= doctor.getEmailId();
	  Doctor doctorObj = service.fetchDoctorByEmailId(emailId);
	  if(doctorObj !=null)
		  throw new Exception("user with"+ emailId+"already exists");
  
  
  doctorObj=null;
  doctorObj=service.saveDoctor(doctor);
  return doctorObj;
   
   }
  
  @PostMapping("/login")
  public Doctor loginDoctor(@RequestBody Doctor doctor) throws Exception {
	  String username=doctor.getUsername();
	  String password= doctor.getPassword();
	  Doctor doctorObj=null;
	  doctorObj= service.fetchDoctorByUsernameAndPassword(username, password);
	  if(doctorObj ==null)
		  throw new Exception("Invalid Credentials");
	  
	  return doctorObj;
  }
  
  @GetMapping(value="acceptAppointment/{id}")
  public boolean acceptAppointment(@PathVariable int id) {
	  System.out.println("in doc accept appointment "+id);
	  return service.approveAppointment(id);
  }
  
  @GetMapping(value="declineAppointment/{id}")
  public boolean rejectAppointment(@PathVariable int id) {
	  return service.rejectAppointment(id);
  }
  
  @GetMapping(value="doctor_list/approved")
  public List<Doctor> getAll(){
	  return service.getAllApprovedDr();
  }
  
  @GetMapping(value="doctor_list/pending")
  public List<Doctor> getAllPending(){
	  return service.getAllPendingDr();
  }
  
  @GetMapping(value="doctor_list/rejected")
  public List<Doctor> getAllRejected(){
	  return service.getAllRejectedDr();
  }
  
  @GetMapping(value="get_doctor/{doctorId}")
  public Doctor getDoctor(@PathVariable int doctorId) {
	  return service.getDoctor(doctorId);
  }
  
}
