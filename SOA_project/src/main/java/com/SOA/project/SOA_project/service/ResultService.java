package com.SOA.project.SOA_project.service;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.SOA.project.SOA_project.model.Result;
import com.SOA.project.SOA_project.repository.ResultRepo;

@Service("ResultService")
public class ResultService {
	@Autowired
	private ResultRepo resultRepo;
	public Result findone(int id) {
		return resultRepo.findById(id).orElse(null);
	}
	public Collection<Result> findAll(){
		return resultRepo.findAll();
	}
	public void save(Result result) {
		resultRepo.save(result);
		
	}
}
