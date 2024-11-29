package com.jfst.LoginRegistration.Service.Impl;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.jfst.LoginRegistration.Dto.LoginDTO;
import com.jfst.LoginRegistration.Dto.UserDTO;
import com.jfst.LoginRegistration.Entity.User;
import com.jfst.LoginRegistration.Repo.UserRepo;
import com.jfst.LoginRegistration.Service.UserService;
import com.jfst.LoginRegistration.response.LoginResponse;

@Service
public class UserImpl implements UserService {

    @Autowired
    private UserRepo userRepo;
    
    @Autowired
    private PasswordEncoder passwordEncoder;
    
    @Override
    public String addUser(UserDTO userDTO) {
        User user = new User(
                userDTO.getUserid(),
                userDTO.getUsername(),
                userDTO.getEmail(),
                this.passwordEncoder.encode(userDTO.getPassword())
        );
        userRepo.save(user);
        return user.getUsername();
    }

    @Override
    public LoginResponse loginUser(LoginDTO loginDTO) {
        User user1 = userRepo.findByEmail(loginDTO.getEmail());
        if (user1 != null) {
            String password = loginDTO.getPassword();
            String encodedPassword = user1.getPassword();
            Boolean isPwdRight = passwordEncoder.matches(password, encodedPassword);
            if (isPwdRight) {
                Optional<User> user = userRepo.findOneByEmailAndPassword(loginDTO.getEmail(), encodedPassword);
                if (user.isPresent()) {
                    return new LoginResponse("Login Success", true);
                } else {
                    return new LoginResponse("Login Failed", false);
                }
            } else {
                return new LoginResponse("Password Not Match", false);
            }
        } else {
            return new LoginResponse("Email Doesn't Exist", false);
        }
    }

    @Override
    public String getUsernameByEmail(String email) {
        return userRepo.findUsernameByEmail(email);
    }
}
