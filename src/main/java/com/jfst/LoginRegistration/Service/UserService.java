package com.jfst.LoginRegistration.Service;

import com.jfst.LoginRegistration.Dto.LoginDTO;
import com.jfst.LoginRegistration.Dto.UserDTO;
import com.jfst.LoginRegistration.response.LoginResponse;

public interface UserService {

	String addUser(UserDTO userDTO);
	LoginResponse loginUser(LoginDTO loginDTO);
	String getUsernameByEmail(String email);
}
