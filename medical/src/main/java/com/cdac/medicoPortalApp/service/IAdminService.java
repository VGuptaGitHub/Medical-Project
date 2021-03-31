package com.cdac.medicoPortalApp.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.cdac.medicoPortalApp.pojos.Admin;
import com.cdac.medicoPortalApp.pojos.Doctor;

@Service
public interface IAdminService {

	public Admin getAdmin(int i);
	public  void addAdmin(Admin admin);
	public Admin loginAdmin(Admin admin);
	public Admin fetchUserByUsernameAndPassword(String username, String password);
	public List<Doctor> getDoctors(int status);
	public boolean setApprovalStatusApproved(int id);
	public boolean setApprovalStatusDisapproved(int id);
}
