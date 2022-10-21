package com.SOA.project.SOA_project.repository;

import java.util.Collection;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.SOA.project.SOA_project.model.Etudiant;

public interface EtudiantRepo extends JpaRepository<Etudiant,Integer> {
	@Query(value= "SELECT * FROM Etudiant E WHERE E.CIN=?1 AND E.CNE=?2",nativeQuery = true)
	Collection<Etudiant> findByCinAndCne(String CIN,String CNE);
}
