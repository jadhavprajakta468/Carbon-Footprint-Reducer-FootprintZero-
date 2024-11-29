package com.jfst.LoginRegistration.Repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.jfst.LoginRegistration.Entity.Carbon;

@Repository
public interface CarbonRepo extends JpaRepository<Carbon,Long> {
	@Query("SELECT c FROM Carbon c WHERE c.email = ?1")
    List<Carbon> findByEmail(String email); 
}
