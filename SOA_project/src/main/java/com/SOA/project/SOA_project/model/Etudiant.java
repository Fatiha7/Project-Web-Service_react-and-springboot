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
@Table(name="Etudiant")
public class Etudiant {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	@Column(name="nom")
	private String nom;
	@Column(name="cin")
	private String cin;
	@Column(name="cne")
	private String cne;
	@JoinColumn(name = "id_Releve", referencedColumnName = "id")
    @JsonIgnoreProperties(value = {"applications", "hibernateLazyInitializer"})
	@OneToOne(fetch = FetchType.LAZY)
	private ReleveDeNote relevedeNote;
	
	
	public Etudiant() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Etudiant(int id, String nom, String cin, String cne, ReleveDeNote relevedeNote) {
		super();
		this.id = id;
		this.nom = nom;
		this.cin = cin;
		this.cne = cne;
		this.relevedeNote = relevedeNote;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getNom() {
		return nom;
	}
	public void setNom(String nom) {
		this.nom = nom;
	}
	public String getCin() {
		return cin;
	}
	public void setCin(String cin) {
		this.cin = cin;
	}
	public String getCne() {
		return cne;
	}
	public void setCne(String cne) {
		this.cne = cne;
	}
	public ReleveDeNote getRelevedeNote() {
		return relevedeNote;
	}
	public void setRelevedeNote(ReleveDeNote relevedeNote) {
		this.relevedeNote = relevedeNote;
	}
			
			
}
