package com.jfst.LoginRegistration.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "footprint")
public class Carbon {
	
	 @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long id;

	    @Column(name = "email")
	    private String email;

	    @Column(name = "footprint")
	    private int footprint;

	    // Constructors
	    public Carbon() {}

	    public Carbon(String email, int footprint) {
	        this.email = email;
	        this.footprint = footprint;
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

	    public int getFootprint() {
	        return footprint;
	    }

	    public void setFootprint(int footprint) {
	        this.footprint = footprint;
	    }
}
