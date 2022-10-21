package com.SOA.project.SOA_project.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.SOA.project.SOA_project.model.ReleveDeNote;
import com.SOA.project.SOA_project.repository.ReleveDeNoteRepo;

@Service("ReleveDeNoteService")
public class ReleveDeNoteService {
	@Autowired
	private ReleveDeNoteRepo releveDeNoteRepo;
	public ReleveDeNote findone(int id) {
		return releveDeNoteRepo.findById(id).orElse(null);
	}
	
}
