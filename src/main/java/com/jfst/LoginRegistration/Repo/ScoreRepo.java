package com.jfst.LoginRegistration.Repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.jfst.LoginRegistration.Entity.Score;

@Repository
public interface ScoreRepo extends JpaRepository<Score,Long>{
	@Query("SELECT s FROM Score s WHERE s.email = ?1")
    List<Score> findByEmail(String email); 
}