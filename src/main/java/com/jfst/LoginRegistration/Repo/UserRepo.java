package com.jfst.LoginRegistration.Repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import com.jfst.LoginRegistration.Entity.User;

@EnableJpaRepositories
@Repository
public interface UserRepo extends JpaRepository<User, Integer> {

	Optional<User> findOneByEmailAndPassword(String email, String encodedPassword);
	User findByEmail(String email);
	@Query("SELECT u.username FROM User u WHERE u.email = ?1")
    String findUsernameByEmail(String email);
}
