package com.jfst.LoginRegistration.UserController;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jfst.LoginRegistration.Entity.Carbon;
import com.jfst.LoginRegistration.Service.CarbonService;

@CrossOrigin(origins = "http://localhost:3000") 
@RestController
@RequestMapping("api/v1/footprint")
public class CarbonController {

	@Autowired
    private CarbonService carbonService;
	
	@PostMapping("/save")
    public ResponseEntity<String> saveFootprint(@RequestBody Carbon carbon){
		carbonService.saveFootprint(carbon);
    	return ResponseEntity.ok("Footprint saved successfully");
    }
    
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/email/{email}")
    public List<Carbon> getFootprintByEmail(@PathVariable String email){
    	return carbonService.getFootprintByEmail(email);
    }
	
}
