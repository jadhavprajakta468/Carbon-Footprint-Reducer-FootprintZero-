package com.jfst.LoginRegistration.UserController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jfst.LoginRegistration.Dto.LoginDTO;
import com.jfst.LoginRegistration.Dto.UserDTO;
import com.jfst.LoginRegistration.Service.UserService;
import com.jfst.LoginRegistration.response.LoginResponse;

@RestController  //Rest API
@CrossOrigin //Cors error ==> Connect Spring Boot to React
@RequestMapping("api/v1/user") //Creates user Table
public class UserController {

	@Autowired
	private UserService userService;
	
	@PostMapping(path = "/save")
    public String saveEmployee(@RequestBody UserDTO userDTO)
    {
        String id = userService.addUser(userDTO);
        return id;
    }
	
	
	@PostMapping(path = "/login")
	public ResponseEntity<?> loginEmployee(@RequestBody LoginDTO loginDTO){
		LoginResponse loginResponse = userService.loginUser(loginDTO);
		return ResponseEntity.ok(loginResponse);
	}
	
	@PostMapping(path = "/get-username")
    public ResponseEntity<String> getUsernameByEmail(@RequestBody String email) {
        String username = userService.getUsernameByEmail(email);
        if (username != null) {
            return ResponseEntity.ok(username);
        } else {
            return ResponseEntity.status(404).body("Email not found");
        }
    }
	
}
