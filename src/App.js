import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar.jsx";
import Quiz from "./components/Quiz/Quiz";
import Chat from "./Chatbot/Chat.jsx";
import Tips from "./components/Tips.jsx";
import Campaigns from "./components/Campaigns.jsx";
import Calculator from "./components/Calculator.jsx";
import Login from "./components/Login.jsx";
import SignUp from "./components/SignUp.jsx";
import Profile from "./components/Profile.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  const [userEmail, setUserEmail] = useState(null);

  const handleLogout = () => {
    setUserEmail(null); // Clear the email state on logout
  };

  return (
    <Router>
      <NavBar email={userEmail} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chatbot" element={<Chat />} />
        <Route
          path="/quiz"
          element={userEmail ? <Quiz email={userEmail} /> : <Navigate to="/login" />}
        />
        <Route path="/tips" element={<Tips />} />
        <Route path="/campaigns" element={<Campaigns />} />
        <Route
          path="/calculator"
          element={userEmail ? <Calculator email={userEmail} /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={<Login onLoginSuccess={(email) => setUserEmail(email)} />}
        />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/profile"
          element={userEmail ? <Profile email={userEmail} /> : <Navigate to="/login" />}
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;