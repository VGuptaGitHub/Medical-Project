package com.cdac.medicoPortalApp.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cdac.medicoPortalApp.pojos.Admin;
import com.cdac.medicoPortalApp.pojos.Doctor;
import com.cdac.medicoPortalApp.repository.AdminRepository;
import com.cdac.medicoPortalApp.repository.CustomDoctorRepository;

@Service
public class AdminServiceImpl implements IAdminService {
	
	@Autowired
	private AdminRepository adminRepo;
	@Autowired
	private CustomDoctorRepository customRepo;

	@Override
	public Admin getAdmin(int i) {
		Optional<Admin> o=adminRepo.findById(i);
		return o.get();
	}

	@Override
	public void addAdmin(Admin admin) {
		adminRepo.save(admin);

	}

	@Override
	public Admin loginAdmin(Admin admin) {
		
		return null;
	}

	@Override
	public Admin fetchUserByUsernameAndPassword(String username, String password) {
		Admin admin=adminRepo.findByAdminUsernameAndAdminPassword(username,password);
		return admin;
	}

	@Override
	public List<Doctor> getDoctors(int status) {
		List<Doctor>approvalList=customRepo.getDoctorsByStatus(status);
		return approvalList;
	}

	@Override
	public boolean setApprovalStatusApproved(int id) {
		
		return customRepo.updateStatusApproved(id);
	}

	@Override
	public boolean setApprovalStatusDisapproved(int id) {
		// TODO Auto-generated method stub
		return customRepo.updateStatusDisapproved(id);
	}

}
