package com.jfst.LoginRegistration.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "score")
public class Score {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "email")
    private String email;

    @Column(name = "quiz_score")
    private int quizScore;

    // Constructors
    public Score() {}

    public Score(String email, int quizScore) {
        this.email = email;
        this.quizScore = quizScore;
    }

    // Getters and setters
    public Long getId() {
        return id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public int getQuizScore() {
        return quizScore;
    }

    public void setQuizScore(int quizScore) {
        this.quizScore = quizScore;
    }
}