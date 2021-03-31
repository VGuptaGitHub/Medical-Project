package com.cdac.medicoPortalApp.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import lombok.Data;



@Entity
@Data
//@SequenceGenerator(name = "admin_id_gen", sequenceName = "admin_id_gen",  initialValue = 1)
public class Admin extends BaseEntity{

	
	private String firstName;
	
	private String lastName;
	
	private String adminUsername;

	private String adminPassword;
	

	
	
	
}
