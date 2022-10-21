package com.SOA.project.SOA_project.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
@Entity
@Table(name="Result")
public class Result {
@Id
@GeneratedValue(strategy = GenerationType.AUTO)
private int id;
@JoinColumn(name = "id_etudiant", referencedColumnName = "id")
@JsonIgnoreProperties(value = {"applications", "hibernateLazyInitializer"})
@OneToOne(fetch = FetchType.LAZY)
private Etudiant etudiant;
@Column(name="note_M")
private double note_M;

public Result() {
	super();
	// TODO Auto-generated constructor stub
}
public Result(int id, Etudiant etudiant, double note_M) {
	super();
	this.id = id;
	this.etudiant = etudiant;
	this.note_M = note_M;
}
public int getId() {
	return id;
}
public void setId(int id) {
	this.id = id;
}
public Etudiant getEtudiant() {
	return etudiant;
}
public void setEtudiant(Etudiant etudiant) {
	this.etudiant = etudiant;
}
public double getNote_M() {
	return note_M;
}
public void setNote_M(double note_M) {
	this.note_M = note_M;
}

}
