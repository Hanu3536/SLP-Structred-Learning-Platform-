import React, { useState } from "react";
import { Auth } from 'aws-amplify';
import { NavLink, useNavigate } from 'react-router-dom';
import { notification } from 'antd';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (email, password) => {
    Auth.signIn(email, password)
          .then(user => {
            // localStorage.setItem(AUTH_USER_TOKEN_KEY, user.signInUserSession.accessToken.jwtToken);
            console.log(JSON.stringify(user));
            console.log("Login Successful");
  
            navigate('/');
            
          })
          .catch(err => {
            console.log("Login Failed");
            notification.error({
              message: 'Error',
              description: 'Error while login. Something went wrong.',
              placement: 'bottomRight',
              duration: 1.5
          });
            console.log(err);
          });
  };

    return (
      <div className="container">
        <h2>Login</h2>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" onChange={handleEmailChange} required />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" onChange={handlePasswordChange} required />
          </div>
          <div>
            <input type="submit" value="Login" onClick={() => handleLogin(email, password)} />
          </div>
          <div>
            <NavLink to="#">Forgot Username</NavLink>
            <p></p>
            <NavLink to="/forgotpassword">Forgot Password</NavLink>
            <p></p>
            <NavLink to ="/signup">Sign Up</NavLink>
          </div>
      </div>
    );
  }

export default Login;
