package com.SOA.project.SOA_project.service;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.SOA.project.SOA_project.model.Etudiant;
import com.SOA.project.SOA_project.repository.EtudiantRepo;
@Service("EtudiantService")
public class EtudiantService{
	@Autowired
	private EtudiantRepo etudiantRepo;
	public Etudiant findone(int id) {
		
		return etudiantRepo.findById(id).orElse(null);
	}
	public Etudiant SaveEtudiant(Etudiant etudiant){
	return etudiantRepo.save(etudiant);
 }
	public Collection<Etudiant> FindByCinAndCne(String CIN,String CNE){
		Collection<Etudiant> etudiant=etudiantRepo.findByCinAndCne(CIN, CNE);
		System.out.print(etudiant);
		return etudiant ;
	}
	 
}
