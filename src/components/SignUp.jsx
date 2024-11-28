import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import axios from "axios";
import "./LoginSignIn.css";

const SignUp= () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  async function save(event) {
    event.preventDefault(); //So clicking Save works
    if (!validateForm()) return;
    try {
        await axios.post("http://localhost:8090/api/v1/user/save",{
            username: username,
            email: email,
            password: password,
        });
        alert("User Registered Successfully");
        }catch (err) {
            alert(err);
        }
    }

  const validateForm = () => {
    if (!username || !email || !password) {
      setMessage("All fields are required.");
      return false;
    }
    if (password.length < 6) {
      setMessage("Password must be at least 6 characters.");
      return false;
    }
    return true;
  };

  return (
    <div id="signup-form" className='out-cont'>
      <div className='in-cont'>
      <h2 className='heading'>Sign Up</h2>
      <input
        className='in'
        type="text"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
        placeholder="Username"
        required
      />
      <input
        className='in'
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Email"
        required
      />
      <input
        className='in'
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        placeholder="Password"
        required
      />
      <button className="b1" type="button" onClick={save}>Sign Up</button>
      <p>Already have an account? <Link className='link' to="http://localhost:3000/login">Log in here</Link></p>
      <div id="signupMessage">{message}</div>
      </div>
    </div>
  );
}

export default SignUp;
