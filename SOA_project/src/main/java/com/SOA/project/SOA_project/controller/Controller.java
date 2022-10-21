package com.SOA.project.SOA_project.controller;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


import com.SOA.project.SOA_project.model.Etudiant;
import com.SOA.project.SOA_project.model.ReleveDeNote;
import com.SOA.project.SOA_project.model.Result;
import com.SOA.project.SOA_project.service.EtudiantService;
import com.SOA.project.SOA_project.service.ResultService;

@RestController
@CrossOrigin("*")
public class Controller {
	@Autowired
	private EtudiantService etudiantservice;
	@Autowired
	private ResultService resultService;
	//-------------Etudiant-------------	
	@RequestMapping(value = "Etudiant/{CIN}/{CNE}",method=RequestMethod.GET)
	public String FindByCinAndCne(@PathVariable String CIN,@PathVariable String CNE) {
		
		Collection<Etudiant>etudiant=etudiantservice.FindByCinAndCne(CIN, CNE);
		if(!etudiant.isEmpty()) {
	 for(Etudiant etud :etudiant) {
		 
		 ReleveDeNote rel;
		 rel=etud.getRelevedeNote();
		if(rel.getAnglais_N()>=12 && rel.getArabe_N()>=12 && rel.getMath_N()>=12 && rel.getPhysique_N()>=12) {
			Double my= rel.getAnglais_N()+rel.getArabe_N()+rel.getMath_N()+rel.getPhysique_N();
			Result resultt=new Result();
			resultt.setEtudiant(etud);
			resultt.setNote_M(my/4);
			resultService.save(resultt);
			return "..good,you did it..!";
		}else{
			return "Sorry..!";
		 
		}}
	 
		}else{
		 return "this person does not exist";
	 
	 }
		return null;
		}
	//----------Result---------------
	@RequestMapping(value = "Result",method=RequestMethod.GET)
	public Collection<Etudiant> findAll() {
		Collection<Result> result=resultService.findAll();
		HashMap<Integer,Etudiant> AllResult = new HashMap<Integer,Etudiant>();	
	
		for(Result res1:result) {
			int i=result.size()+1;
			for(Result res:result) {
				if(res1.getNote_M()>=res.getNote_M()) {
					i--;
				}	
		}
			Etudiant etu = new Etudiant();
			etu.setCin(res1.getEtudiant().getCin());
			etu.setCne(res1.getEtudiant().getCne());
			etu.setNom(res1.getEtudiant().getNom());
			etu.setId(i);
			AllResult.put(i,etu);
		}
		Collection<Etudiant> e=new ArrayList<Etudiant>();
		for (Map.Entry m: AllResult.entrySet()) {
			e.add((Etudiant) m.getValue());
            System.out.println(m.getKey() + " " + m.getValue());
        }
		System.out.println(e);
		return e;
	}
	
	
}
