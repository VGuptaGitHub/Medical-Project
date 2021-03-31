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

import com.cdac.medicoPortalApp.pojos.Admin;
import com.cdac.medicoPortalApp.pojos.Doctor;
import com.cdac.medicoPortalApp.service.IAdminService;

@CrossOrigin
@RestController
@RequestMapping("/admin")
public class AdminController {

	@Autowired
	private IAdminService adminService;
	
	@PostMapping(value="/add")
	public String addNewAdmin(@RequestBody Admin admin) {
		adminService.addAdmin(admin);
		return "New Admin is Added : "+admin.getFirstName()+" "+admin.getLastName()+" || Username : "+admin.getAdminUsername();
	}
	
	@PostMapping(value="/login")
	public Admin loginPatient(@RequestBody Admin admin) {
		Admin retAdmin=null;
		if(admin.getAdminUsername() != null && admin.getAdminPassword() != null) {
			String username=admin.getAdminUsername();
			String password = admin.getAdminPassword();
			retAdmin=adminService.fetchUserByUsernameAndPassword(username, password);
		}
		return retAdmin;
	}
	
	@PostMapping(value="admin/doctorList/status/{status}")
	public List<Doctor> getDoctorEntries(@PathVariable int status){
		return adminService.getDoctors(status);
	}
	//problem to fix : here currently dr id is hard coded in the front end
	@GetMapping(value="/approve-dr/{id}")
	public boolean updateApprovalStatus(@PathVariable int id) {
		return adminService.setApprovalStatusApproved(id);
	}
	
	@GetMapping(value="/reject-dr/{id}")
	public boolean updateDisapprovalStatus(@PathVariable int id) {
		return adminService.setApprovalStatusDisapproved(id);
	}
}
