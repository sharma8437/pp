import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import './../../styels/signupPage.css'; // Path for CSS
import image from './../../assets/signup.png'; // Path for image
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const registerUser = async (data, setLoading) => {
  try {
    setLoading(true);
    const response = await axios.post('http://localhost:8000/user/register', data);
    toast.success('Registration Successful!', { position: 'top-right' });
    setLoading(false);
    return response.data;
  } catch (error) {
    toast.error('Registration Failed. Please try again.', { position: 'top-right' });
    setLoading(false);
    throw error;
  }
};

const RegistrationPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  // Validation schema
  const validationSchema = Yup.object().shape({
    fullname: Yup.string()
      .min(3, 'Full name must be at least 3 characters')
      .required('Full name is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Passwords must match')
      .required('Confirm Password is required'),
  });

  // React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  // Submit handler
  const onSubmit = async (values) => {
    const { fullname, email, password } = values;
    const payload = { name: fullname, email, password };
    try {

      console.log("ddd")
      await registerUser(payload, setLoading);
      reset(); // Reset the form on success
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  return (
    <div className="registration-container">
      {/* Toast Container */}
      <ToastContainer />

      {/* Logo - Centered at the top */}
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
            <img src={image} alt="Dashboard Preview" className="dashboard-image" />
          </div>
        </div>

        {/* Right Section */}
        <div className="right-section">
          <div className="form-container">
            <h1 className="form-heading">Welcome to Dashboard</h1>

            <form className="form" onSubmit={handleSubmit(onSubmit)}>
              <div className="input-group">
                <label className="label">Full name*</label>
                <input
                  type="text"
                  placeholder="Full name"
                  {...register('fullname')}
                  className="input-field"
                />
                {errors.fullname && <p className="error-text">{errors.fullname.message}</p>}
              </div>
              <div className="input-group">
                <label className="label">Email Address*</label>
                <input
                  type="email"
                  placeholder="Email Address"
                  {...register('email')}
                  className="input-field"
                />
                {errors.email && <p className="error-text">{errors.email.message}</p>}
              </div>
              <div className="input-group">
                <label className="label">Password*</label>
                <div className="password-input-container">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password"
                    {...register('password')}
                    className="input-field password-field"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="password-toggle-button"
                  >
                    {showPassword ? 'Hide' : 'Show'}
                  </button>
                </div>
                {errors.password && <p className="error-text">{errors.password.message}</p>}
              </div>
              <div className="input-group">
                <label className="label">Confirm Password*</label>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  {...register('confirmPassword')}
                  className="input-field password-field"
                />
                {errors.confirmPassword && (
                  <p className="error-text">{errors.confirmPassword.message}</p>
                )}
              </div>
              <button type="submit" className="submit-button" disabled={loading}>
                {loading ? 'Submitting...' : 'Register'}
              </button>
              <p className="login-link">
                Already have an account?{' '}
                <Link to="/login" className="login-text">
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
