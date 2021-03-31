package com.cdac.medicoPortalApp.pojos;

import java.time.LocalDate;
import java.time.LocalTime;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;

@Entity
//@Data
//@SequenceGenerator(name = "appointment_id_gen", sequenceName = "appointment_id_gen",  initialValue = 1)
public class Appointment extends BaseEntity {

	private String name;
	private String surname;
	private String mobNo;
	private int status;
	private LocalTime time;
	private LocalDate date;

	@ManyToOne(fetch = FetchType.LAZY)
	@JsonIgnoreProperties("appointment")
	@JsonIgnore
	private Patient patient;

	@ManyToOne(fetch = FetchType.LAZY)
	@JsonIgnoreProperties("appointment")
	@JsonIgnore
	private Doctor doctor;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getSurname() {
		return surname;
	}

	public void setSurname(String surname) {
		this.surname = surname;
	}

	public String getMobNo() {
		return mobNo;
	}

	public void setMobNo(String mobNo) {
		this.mobNo = mobNo;
	}

	public int getStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
	}

	public LocalTime getTime() {
		return time;
	}

	public void setTime(LocalTime time) {
		this.time = time;
	}

	public LocalDate getDate() {
		return date;
	}

	public void setDate(LocalDate date) {
		this.date = date;
	}
	@JsonIgnore
	public Patient getPatient() {
		return patient;
	}
	@JsonProperty
	public void setPatient(Patient patient) {
		this.patient = patient;
	}
	@JsonIgnore
	public Doctor getDoctor() {
		return doctor;
	}
	@JsonProperty
	public void setDoctor(Doctor doctor) {
		this.doctor = doctor;
	}
	

}
