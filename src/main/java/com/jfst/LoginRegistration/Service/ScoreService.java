package com.jfst.LoginRegistration.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jfst.LoginRegistration.Entity.Score;
import com.jfst.LoginRegistration.Repo.ScoreRepo;

@Service
public class ScoreService {

    @Autowired
    private ScoreRepo scoreRepo;

    public Score saveScore(Score score) {
    	return scoreRepo.save(score);
    }
    
    public List<Score> getScoresByEmail(String email){
    	return scoreRepo.findByEmail(email);
    }
}