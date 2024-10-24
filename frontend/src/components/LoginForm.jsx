import React, { useState } from 'react';
import './LoginForm.css';
import image from '../assets/login1.png'; 

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [loginSuccess, setLoginSuccess] = useState(false); 

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setLoginSuccess(true);
  };

  return (
    <div className="login-container">
      <div className="login-illustration">
        <img src={image} alt="Login Illustration" className="illustration-img" />
      </div>

      <div className="login-form">
        <h2>Account Login</h2>
        <p>If you are already a member you can login with your email address and password.</p>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email address"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Password"
              required
            />
          </div>

          <div className="remember-me">
            <input type="checkbox" id="rememberMe" />
            <label htmlFor="rememberMe">Remember me</label>
          </div>

          <button type="submit" className="login-button">Login</button>

          {loginSuccess && <p className="success-message">Login successful!</p>}
        </form>

        <p className="register-link">
          Don't have an account? <a href="/signup">Sign up here</a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
