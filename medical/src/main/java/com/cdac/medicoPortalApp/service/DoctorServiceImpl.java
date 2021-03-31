package com.cdac.medicoPortalApp.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cdac.medicoPortalApp.pojos.Doctor;
import com.cdac.medicoPortalApp.repository.CustomDoctorRepository;
import com.cdac.medicoPortalApp.repository.DoctorRepository;

@Service
public class DoctorServiceImpl implements IDoctorService {

	@Autowired
	private DoctorRepository repo;
	
	@Autowired
	private CustomDoctorRepository  customRepo;
	
	@Override
	public Doctor saveDoctor(Doctor doctor) {
		
		return repo.save(doctor);
	}

	@Override
	public Doctor fetchDoctorByEmailId(String email) {
		// TODO Auto-generated method stub
		return repo.findByEmailId(email);
	}

	@Override
	public Doctor fetchDoctorByEmailIdAndPassword(String email, String password) {
		// TODO Auto-generated method stub
		return repo.findByEmailIdAndPassword(email, password);
	}

	@Override
	public Doctor fetchDoctorByUsernameAndPassword(String username, String password) {
		// TODO Auto-generated method stub
		return repo.findByUsernameAndPassword(username, password);
	}

	@Override
	public boolean approveAppointment(int id) {
		// TODO Auto-generated method stub
		return customRepo.acceptAppointmentStatus(id);
	}

	@Override
	public boolean rejectAppointment(int id) {
		// TODO Auto-generated method stub
		return customRepo.rejectAppointmentStatus(id);
	}

	@Override
	public Doctor getDoctor(int doctorId) {
		Optional<Doctor> o = repo.findById(doctorId);
		return o.get();
	}

	@Override
	public List<Doctor> getAllApprovedDr() {
		// TODO Auto-generated method stub
		return customRepo.getDoctorsByStatus(1);
	}

	@Override
	public List<Doctor> getAllPendingDr() {
		// TODO Auto-generated method stub
		return customRepo.getDoctorsByStatus(-1);
	}

	@Override
	public List<Doctor> getAllRejectedDr() {
		// TODO Auto-generated method stub
		return customRepo.getDoctorsByStatus(2);
	}

}
