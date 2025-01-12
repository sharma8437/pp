import '../../styels/forgotPassword.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import image from './../../assets/signup.png';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle forgot password
    console.log('Email submitted:', email);
  };

  return (
    <div className="forgot-password-container">
      {/* Logo Section */}
      <div className="logo-container">
        <div className="logo">
          <div className="logo-circle"></div>
          <span className="logo-text">LOGO</span>
        </div>
      </div>

      {/* Main Container */}
      <div className="main-container">
        {/* Left Section */}
        <div className="left-section">
          <div className="image-container">
            <img 
              src={image}
              alt="Forgot Password Illustration"
              className="forgot-password-image"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="right-section">
          <div className="form-container">
            <h1 className="form-heading">Forgot Password?</h1>
            <p className="form-description">
              Enter your email address, and we'll send you a link to reset your password.
            </p>
            <form className="form" onSubmit={handleSubmit}>
              <div className="input-group">
                <label className="label">Email Address*</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="input-field"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="submit-button">Send Reset Link</button>
              <p className="back-to-login">
                Remember your password?{' '}
                <Link to="/login" className="back-link">Login</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
