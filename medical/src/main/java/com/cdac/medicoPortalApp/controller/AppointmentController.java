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

//import com.cdac.medicoPortalApp.dto.AppointmentDTO;
import com.cdac.medicoPortalApp.pojos.Appointment;
import com.cdac.medicoPortalApp.service.IAppointmentService;

@RestController
@CrossOrigin
@RequestMapping("/appointment")
public class AppointmentController {

	@Autowired
	private IAppointmentService appointmentService;
	
	
	@PostMapping(value="/add_appointment")
	public String addAppointment(@RequestBody Appointment appointment) {
		appointmentService.addAppointment(appointment);
		return "success";
	}
	
	@GetMapping(value="pending/{id}")
	public List<Appointment> getPendingAppointments(@PathVariable int id){
		return appointmentService.allPendingAppointments(id, -1);
	}
	
	@GetMapping(value="pending/{appointmentId}/{doctorId}")
	public List<Appointment> getOneAppointment(@PathVariable int appointmentId, @PathVariable int doctorId){
		return appointmentService.getParticularAppointment(appointmentId, doctorId);
	}
	
	@GetMapping(value="approved/{id}")
	public List<Appointment> getAcceptAppointments(@PathVariable int id){
		return appointmentService.allPendingAppointments(id, 1);
	}
	
	@GetMapping(value="rejected/{id}")
	public List<Appointment> getRejectedAppointments(@PathVariable int id){
		return appointmentService.allPendingAppointments(id, 0);
	}
	@GetMapping(value="patientApp/{id}")
	public List<Appointment> getPatientAppointments(@PathVariable int id){
		return appointmentService.allPatientAppointments(id, 1);
	}
	
}
