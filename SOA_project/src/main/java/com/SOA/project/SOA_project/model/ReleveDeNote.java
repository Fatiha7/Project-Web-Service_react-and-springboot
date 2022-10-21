package com.SOA.project.SOA_project.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(name="ReleveDeNote")
public class ReleveDeNote {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	@Column(name="Math_N")
	private double Math_N;
		@Column(name="physique_N")
	 private double physique_N;
		@Column(name="arabe_N")
		 private double arabe_N;
			@Column(name="anglais_N")
		 private double anglais_N;
			
			public ReleveDeNote() {
				super();
				// TODO Auto-generated constructor stub
			}
			public ReleveDeNote(int id, double math_N, double physique_N, double arabe_N, double anglais_N) {
				super();
				this.id = id;
				Math_N = math_N;
				this.physique_N = physique_N;
				this.arabe_N = arabe_N;
				this.anglais_N = anglais_N;
			}
			public int getId() {
				return id;
			}
			public void setId(int id) {
				this.id = id;
			}
			public double getMath_N() {
				return Math_N;
			}
			public void setMath_N(double math_N) {
				Math_N = math_N;
			}
			public double getPhysique_N() {
				return physique_N;
			}
			public void setPhysique_N(double physique_N) {
				this.physique_N = physique_N;
			}
			public double getArabe_N() {
				return arabe_N;
			}
			public void setArabe_N(double arabe_N) {
				this.arabe_N = arabe_N;
			}
			public double getAnglais_N() {
				return anglais_N;
			}
			public void setAnglais_N(double anglais_N) {
				this.anglais_N = anglais_N;
			}
			
			
}
