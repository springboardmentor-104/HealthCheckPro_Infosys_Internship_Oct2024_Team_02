import React, { useState } from 'react';
import './SignupForm.css';
import image from '../assets/signup1.png'; 

const SignupForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    city: '',
    password: ''
  });

  const [signupSuccess, setSignupSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSignupSuccess(true);
  };

  return (
    <div className="signup-container">
      <div className="signup-illustration">
        <img src={image} alt="Illustration" className="illustration-img" />
      </div>

      <div className="signup-form">
        <h2>Account Signup</h2>
        <p>Become a member and enjoy exclusive promotions.</p>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="Full Name"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email Address"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="city">City</label>
            <select
              id="city"
              value={formData.city}
              onChange={handleInputChange}
              required
            >
              <option value="">Select City</option>
              <option value="New York">New York</option>
              <option value="Los Angeles">Los Angeles</option>
              <option value="Chicago">Chicago</option>
            </select>
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
          <button type="submit" className="signup-button">
            Continue
          </button>

          {signupSuccess && <p className="success-message">Signup successful!</p>}
        </form>

        <p className="login-link">
          Already have an account? <a href="/login">Login now</a>
        </p>
      </div>
    </div>
  );
};

export default SignupForm;
