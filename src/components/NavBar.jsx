import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";
import logo from "./images/logo3.png";

const NavBar = ({ email, onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout(); // Call the logout function passed from parent
    navigate("/"); // Redirect to the homepage after logout
  };

  return (
    <header>
      <div className="nav-container">
        <img src={logo} alt="FootprintZero Logo" className="logo" />
        <span className="site-name">FootprintZero</span>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><a href="/#About">About Us</a></li>
            <li><Link to="/quiz">Quizzes</Link></li>
            <li><Link to="/calculator">Calculator</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/campaigns">Campaigns</Link></li>
            <li><Link to="/tips">Tips</Link></li>
            <li><Link to="/chatbot">Chatbot</Link></li>
            {email ? (
              <li><Link onClick={handleLogout}>Logout</Link></li>
            ) : (
              <li><Link to="/login">Login</Link></li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
