// import React, { useState } from 'react';
// import { useNavigate, Link, useLocation } from 'react-router-dom';
// import axios from "axios";
// import "./LoginSignIn.css";

// const Login = ({ onLoginSuccess }) => { // Accept callback as prop
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [message, setMessage] = useState('');
//   const navigate = useNavigate();
//   const location = useLocation();

//   const redirectPath = location.state?.from || '/quiz';

//   async function login(event) {
//     event.preventDefault();
//     try {
//       if (!validateForm()) return;
//       const response = await axios.post("http://localhost:8090/api/v1/user/login", {
//         email: email,
//         password: password,
//       });
      
//       if (response.data.message === "Email Doesn't Exist") {
//         alert("Email Doesn't Exist");
//       } else if (response.data.message === "Login Success") {
//         onLoginSuccess(email); // Pass email to parent
//         navigate(redirectPath); // Redirect to quiz
//       } else {
//         alert("Incorrect Email or Password");
//       }
//     } catch (err) {
//       alert(err);
//     }
//   }

//   const validateForm = () => {
//     if (!email || !password) {
//       setMessage("All fields are required.");
//       return false;
//     }
//     if (password.length < 6) {
//       setMessage("Password must be at least 6 characters.");
//       return false;
//     }
//     return true;
//   };

//   return (
//     <div id="login-form" className='out-cont'>
//       <div className='in-cont'>
//         <h2>Login</h2>
//         <input
//           className='in'
//           type="text"
//           value={email}
//           onChange={(event) => setEmail(event.target.value)}
//           placeholder="Email"
//           required
//         />
//         <input
//           className='in'
//           type="password"
//           value={password}
//           onChange={(event) => setPassword(event.target.value)}
//           placeholder="Password"
//           required
//         />
//         <button type="button" className="b1" onClick={login}>Login</button>
//         <p>Don't have an account? <Link className='link' to="/signup">Sign up here</Link></p>
//         <div id="loginMessage">{message}</div>
//       </div>
//     </div>
//   );
// }

// export default Login;

import React, { useState } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import axios from "axios";
import "./LoginSignIn.css";

const Login = ({ onLoginSuccess }) => { // Accept callback as prop
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const redirectPath = location.state?.from || '/';

  async function login(event) {
    event.preventDefault();
    try {
      if (!validateForm()) return;
      const response = await axios.post("http://localhost:8090/api/v1/user/login", {
        email: email,
        password: password,
      });
      
      if (response.data.message === "Email Doesn't Exist") {
        alert("Email Doesn't Exist");
      } else if (response.data.message === "Login Success") {
        onLoginSuccess(email); // Pass email to parent
        navigate(redirectPath); // Redirect to quiz
      } else {
        alert("Incorrect Email or Password");
      }
    } catch (err) {
      alert(err);
    }
  }

  const validateForm = () => {
    if (!email || !password) {
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
    <div id="login-form" className='out-cont'>
      <div className='in-cont'>
        <h2>Login</h2>
        <input
          className='in'
          type="text"
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
        <button type="button" className="b1" onClick={login}>Login</button>
        <p>Don't have an account? <Link className='link' to="/signup">Sign up here</Link></p>
        <div id="loginMessage">{message}</div>
      </div>
    </div>
  );
}

export default Login;
