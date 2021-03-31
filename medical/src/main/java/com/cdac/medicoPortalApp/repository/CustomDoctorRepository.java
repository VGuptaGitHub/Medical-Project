package com.cdac.medicoPortalApp.repository;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

import com.cdac.medicoPortalApp.pojos.Doctor;

@Repository
@Transactional
public class CustomDoctorRepository {

	@PersistenceContext
	private EntityManager entityManager;
	
	public List<Doctor> getDoctorsByStatus(int status){
		int passedStatus= status;
		List<Object> pendingApprovalDr=entityManager
				.createQuery("select d from Doctor d where d.approvalStatus=:approvalStatus")
				.setParameter("approvalStatus",passedStatus)
				.getResultList();
		List<Doctor> pendingApprovalDoctors=new ArrayList<Doctor>();
		for(Object dr : pendingApprovalDr) 
			pendingApprovalDoctors.add((Doctor)dr);
	
	
	System.out.println(pendingApprovalDoctors);
	return pendingApprovalDoctors;
	
	
	}
	public boolean updateStatusApproved(int id) {
		int rowsUpdated=entityManager
				.createQuery("update Doctor d set d.approvalStatus=:approvedStatus where d.id=:id")
				.setParameter("approvedStatus", 1)
				.setParameter("id", id)
				.executeUpdate();
		if(rowsUpdated>0)
			return true;
		return false;
	}
	
	public boolean updateStatusDisapproved(int id) {
		int rowsUpdate=entityManager
				.createQuery("update Doctor d set d.approvalStatus=:approvedStatus where d.doctorId=:id")
				.setParameter("approvedStatus",2)
				.setParameter("id",id)
				.executeUpdate();
		if(rowsUpdate>0)
			return true;
		return false;
	}
	
	public boolean acceptAppointmentStatus(int id) {
		
		int  rowsUpdate= entityManager
				.createQuery("update Appointment ap set ap.status=:acceptStatus where ap.id=:id")
				.setParameter("acceptStatus", 1)
				.setParameter("id",id)
				.executeUpdate();
		
		if(rowsUpdate>0)
			return true;
		return false;
	}
	
	
	public boolean rejectAppointmentStatus(int id) {
		int rowsUpdated = entityManager
				.createQuery("update Appointment ap set ap.status=:acceptStatus where  ap.id=:id")
				.setParameter("acceptStatus",0)
				.setParameter("id", id)
				.executeUpdate();
		if(rowsUpdated>0)
			return true;
		return false;
	}
	
	
	
}
