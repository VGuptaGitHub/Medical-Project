package com.cdac.medicoPortalApp.pojos;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.Data;

@Entity
@Table
@Data
public class Doctor extends BaseEntity{
	

	private String username;
	private String emailId;
	private String password;
	private String firstName;
	private String lastName;
	private int age;
	private int experience;
	private String hospitalName;
	private String hospitalAddress;
	private String area;
	private String city;
	private String state;
	private long mobileNumber;
	private String sex;
	private int approvalStatus=-1;
	
	@OneToMany(cascade=CascadeType.ALL,fetch=FetchType.LAZY,mappedBy="doctor")
	@JsonIgnoreProperties("doctor")
	private List<Appointment> appointment=new ArrayList<>();
	
	
	
	
}