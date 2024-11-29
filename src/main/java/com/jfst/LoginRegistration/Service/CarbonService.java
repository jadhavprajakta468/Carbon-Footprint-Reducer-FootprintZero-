package com.jfst.LoginRegistration.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jfst.LoginRegistration.Entity.Carbon;
import com.jfst.LoginRegistration.Repo.CarbonRepo;

@Service
public class CarbonService {

	@Autowired
    private CarbonRepo carbonRepo;
	
	public Carbon saveFootprint(Carbon carbon) {
    	return carbonRepo.save(carbon);
    }
    
    public List<Carbon> getFootprintByEmail(String email){
    	return carbonRepo.findByEmail(email);
    }
}
