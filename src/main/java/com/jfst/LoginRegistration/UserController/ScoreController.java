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

import com.jfst.LoginRegistration.Entity.Score;
import com.jfst.LoginRegistration.Service.ScoreService;

@CrossOrigin(origins = "http://localhost:3000") 
@RestController
@RequestMapping("api/v1/score")
public class ScoreController {

    @Autowired
    private ScoreService scoreService;

    @PostMapping("/save")
    public ResponseEntity<String> saveScore(@RequestBody Score score){
    	scoreService.saveScore(score);
    	return ResponseEntity.ok("Score saved successfully");
    }
    
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/email/{email}")
    public List<Score> getScoresByEmail(@PathVariable String email){
    	return scoreService.getScoresByEmail(email);
    }
    
}