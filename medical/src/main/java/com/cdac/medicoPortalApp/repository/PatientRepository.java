package com.cdac.medicoPortalApp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cdac.medicoPortalApp.pojos.Patient;

public interface PatientRepository extends JpaRepository<Patient,Integer>{
  public Patient findByUserNameAndPassword(String userName, String password);
}
