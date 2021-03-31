package com.cdac.medicoPortalApp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cdac.medicoPortalApp.pojos.Doctor;

@Repository
public interface DoctorRepository extends JpaRepository<Doctor, Integer>{

	public Doctor findByEmailId(String emailId);
	
	public Doctor findByEmailIdAndPassword(String emailId, String password);
	
	public Doctor findByUsernameAndPassword(String username, String password);
	
}
