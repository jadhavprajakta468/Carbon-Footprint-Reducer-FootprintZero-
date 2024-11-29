package com.jfst.LoginRegistration;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication(exclude = SecurityAutoConfiguration.class)
@ComponentScan(basePackages = {
    "com.jfst.LoginRegistration.Config",
    "com.jfst.LoginRegistration.Dto",
    "com.jfst.LoginRegistration.Entity",
    "com.jfst.LoginRegistration.Repo",
    "com.jfst.LoginRegistration.response",
    "com.jfst.LoginRegistration.Service",
    "com.jfst.LoginRegistration.Service.Impl",
    "com.jfst.LoginRegistration.UserController"
})
public class LoginRegistrationApplication {

    public static void main(String[] args) {
        SpringApplication.run(LoginRegistrationApplication.class, args);
    }
}
