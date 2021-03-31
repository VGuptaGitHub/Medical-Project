package com.cdac.medicoPortalApp.service;

import java.util.List;

//import com.cdac.medicoPortalApp.dto.AppointmentDTO;
import com.cdac.medicoPortalApp.pojos.Appointment;

public interface IAppointmentService {

	public void addAppointment(Appointment appointment);
	public List<Appointment> allPendingAppointments(int id, int status);
	public List<Appointment> allPatientAppointments(int id ,int status);
	public List<Appointment> getParticularAppointment(int appointmentId, int doctorId);
}
