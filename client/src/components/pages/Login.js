import "../../styels/loginPage.css"; // Ensure correct file path
import image from "./../../assets/signup.png";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const loginUser = async (payload, setLoading, navigate) => {
  try {
    setLoading(true);
    console.log("II")
    const response = await axios.post("http://localhost:8000/user/login", payload);
    toast.success("Login Successfully!", { position: "top-right" });
    localStorage.setItem("token", JSON.stringify(response.data.token));
    navigate("/dashboard");
  } catch (error) {
    console.log(error)
    toast.error("Login failed! Please try again.", { position: "top-right" });
  } finally {
    setLoading(false);
  }
};

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = { email, password };

    // Call the API login function
    loginUser(payload, setLoading, navigate);
  };

  return (
    <div className="registration-container">
      {/* Toast Container */}
      <ToastContainer />

      {/* Logo Section */}
      <div className="logo-container">
        <div className="logo">
          <div className="logo-circle"></div>
          <span className="logo-text">LOGO</span>
        </div>
      </div>

      {/* Main Content */}
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
            <h1 className="form-heading">Welcome Back</h1>
            <form className="form" onSubmit={handleSubmit}>
              {/* Email Input */}
              <div className="input-group">
                <label className="label" htmlFor="email">
                  Email Address*
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email Address"
                  className="input-field"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              {/* Password Input */}
              <div className="input-group">
                <label className="label" htmlFor="password">
                  Password*
                </label>
                <div className="password-input-container">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    id="password"
                    placeholder="Password"
                    className="input-field password-field"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="password-toggle-button"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
                <p className="forgot-password-link">
                  <Link to="/forgot-password" className="forgot-password-text">
                    Forgot Password?
                  </Link>
                </p>
              </div>

              {/* Submit Button */}
              <button type="submit" className="submit-button" disabled={loading}>
                {loading ? "Logging in..." : "Login"}
              </button>

              {/* Link to Registration */}
              <p className="login-link">
                Don't have an account?{" "}
                <Link to="/signup" className="login-text">
                  Register
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
