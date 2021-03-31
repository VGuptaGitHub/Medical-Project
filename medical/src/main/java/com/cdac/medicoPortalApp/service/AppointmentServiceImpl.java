package com.cdac.medicoPortalApp.service;

import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

//import com.cdac.medicoPortalApp.dto.AppointmentDTO;
import com.cdac.medicoPortalApp.pojos.Appointment;
import com.cdac.medicoPortalApp.pojos.Doctor;
import com.cdac.medicoPortalApp.pojos.Patient;
import com.cdac.medicoPortalApp.repository.AppointmentRepository;

@Service
public class AppointmentServiceImpl implements IAppointmentService {

	@Autowired
	private AppointmentRepository appointmentRepo;
	
//	@Override
//	public void addAppointment(AppointmentDTO appointmentDTO) {
//		Appointment appointment=new Appointment();
//		//copy DTO --> POJO
//		BeanUtils.copyProperties(appointmentDTO, appointment);
//		System.out.println("dto "+appointmentDTO);
//		System.out.println("pojo "+appointment);
//		//get doc id ---> wrap it in doc pojo --> assign it in appointment
//		Doctor doc=new Doctor();
//		doc.setId(appointmentDTO.getDoctorId());
//		appointment.setDoctor(doc);
//		//get patient id ---> wrap it in patient pojo --> assign it in appointment
//		Patient patient=new Patient();
//		patient.setId(appointmentDTO.getPatientId());
//		appointment.setPatient(patient);
//		System.out.println("pojo after set "+appointment+" "+appointment.getDoctor()+" "+appointment.getPatient());
//		appointmentRepo.save(appointment);
//
//	}
	
	@Override
	public void addAppointment(Appointment appointment) {
		System.out.println("in app service "+appointment);
		appointmentRepo.save(appointment);
		
	}

	@Override
	public List<Appointment> allPendingAppointments(int id, int status) {

		return appointmentRepo.findByDoctorIdAndStatus(id, status);
	}

	

	@Override
	public List<Appointment> allPatientAppointments(int id, int status) {
		
		return appointmentRepo.findByPatientIdAndStatus(id, status);
	}

	@Override
	public List<Appointment> getParticularAppointment(int appointmentId, int doctorId) {
		
		return appointmentRepo.findByIdAndDoctorId(appointmentId, doctorId);
	}

}
