import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import ArrowForward from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';
import Logo from '../../../components/Logo';
import axios from 'axios';
import { useUser } from "../../../contexts/UserProvider";
import Lottie from 'react-lottie-player';
import animationData from "../assets/Login.json";
function Signin() {

  // @ts-ignore
  const { updateUser, setUser } = useUser();

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value.trim());
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };


  const handleLogin = async (e) => {
    e.preventDefault();
    setEmail('');
    setPassword('');
    setRememberMe(false);
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      // Save token
      localStorage.setItem("token", res.data.token);

      // Update global user context
      updateUser(res.data.user);

      alert("Login successful!");
      setUser(res.data); // لأن السيرفر بيرجع user مباشرة
      localStorage.setItem("user", JSON.stringify(res.data)); // حفظ في localStorage

      // Navigate (لو عندك React Router)
      window.location.href = "/";

    } catch (err) {
      console.log(err);
      alert(err.response?.data?.message || "Login failed");
    }
  };


  return (
    <>
      <style>{`
     /* Global reset and body styling */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Roboto, sans-serif;
  background: #fff;
  height: 100vh;
  display: flex;
  overflow: hidden;
}

/* Navbar styling */
.etutor-navbar {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 240px;
  background-color: #fff;
  border-bottom: 1px solid #EBEBFF;
}

.etutor-logo-box {
  display: flex;
  align-items: center;
  gap: 8px;
}

.etutor-logo-box img {
  width: 28px;
  height: 28px;
}

.etutor-logo-box h2 {
  color: #2c2c2c;
  font-weight: 600;
  font-size: 25px;
  margin-top: 7px;
}

.etutor-Create-Account {
  display: flex;
  align-items: center;
  gap: 16px;
}

.etutor-Create-Account span {
  color: #6c757d;
  font-size: 13px;
}

.etutor-Create-Account button {
  background-color: #fff2ec;
  color: #ff6b3d;
  border: none;
  padding: 10px 18px;
  border-radius: 2px;
  cursor: pointer;
  font-weight: bold;
  font-size: 13px;
}

.etutor-Create-Account button:hover {
  background-color: #ffe6dc;
}

/* Main layout container */
.signup-container {
  display: grid;
  grid-template-columns: 1fr 2fr;
  width: 100%;
  height: 100vh;
}

/* Left section with illustration */
.left-section {
  background: #EBEBFF;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 0px;
  text-align: center;
  width: 600px;
  height: 100vh;
  position: relative;
  overflow: hidden;
}

.illustration {
  width: 100%;
  max-width: 600px;
  height: auto;
  margin: 0 auto;
  display: block;
  position: relative;
  top: -26px;
  left: 15px;
}

/* Right section with form */
.right-section {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  padding: 48px;
}

.form-container {
  max-width: 440px;
  width: 100%;
}

.sign-in-title {
  font-size: 30px;
  font-weight: 640;
  color: #1a1a1a;
  margin-bottom: 70px;
  text-align: center;
}

/* Form inputs styling */
.signup-form {
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  max-width: 500px;
}

.form-group {
  position: relative;
  width: 100%;
}

.form-group input {
  width: 100%;
  padding: 18px 20px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 15.5px;
  background: #fff;
  transition: border-color 0.2s, box-shadow 0.2s;
  color: #374151;
  position: relative;
  z-index: 1;
}

.form-group input:focus {
  outline: none;
  border-color: #f97316;
  box-shadow: 0 0 0 2px rgba(249, 115, 22, 0.1);
}

.form-group label {
  position: absolute;
  top: 0;
  left: 18px;
  transform: translateY(-50%);
  background: #fff;
  padding: 0 6px;
  font-size: 14px;
  font-weight: 600;
  color: #4b5563;
  pointer-events: none;
  z-index: 2;
}

/* Password input with toggle */
.password-wrapper {
  position: relative;
  width: 100%;
}

.password-wrapper input {
  width: 100%;
  padding: 18px 50px 18px 20px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 15.5px;
  background: #fff;
  transition: border-color 0.2s, box-shadow 0.2s;
  color: #374151;
  box-sizing: border-box;
}

.password-wrapper input:focus {
  outline: none;
  border-color: #f97316;
  box-shadow: 0 0 0 2px rgba(249, 115, 22, 0.1);
}

.toggle-password {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  padding: 0;
  margin: 0;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
}

.toggle-password svg {
  font-size: 22px;
}

input[type="password"]::-ms-reveal,
input[type="password"]::-webkit-textfield-decoration-container,
input[type="password"]::-webkit-clear-button {
  display: none !important;
}

/* Checkbox and button row */
.options-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  margin-top: 10px;
}

.terms-text {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  color: #6b7280;
}

.terms-text input[type="checkbox"] {
  width: 18px;
  height: 18px;
  accent-color: #f97316;
  cursor: pointer;
  margin: 0;
  vertical-align: middle;
  appearance: none;
  border: 1px solid #d1d5db;
  border-radius: 4px;
  background: #fff;
  position: relative;
}

.terms-text input[type="checkbox"]:checked {
  background: #f97316;
  border-color: #f97316;
}

.terms-text input[type="checkbox"]:checked::before {
  content: '\\2713';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 14px;
  font-weight: bold;
}

.terms-text label {
  font-size: 12px;
  color: #6b7280;
  cursor: pointer;
}

/* Sign-in button styling */
.sign-in-btn {
  padding: 10px 22px;
  background: #f97316;
  color: #fff;
  border: none;
  border-radius: 2px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  min-width: 100px;
}

.sign-in-btn .sign-in-text {
  position: absolute;
  transition: opacity 0.3s ease;
}

.sign-in-btn .arrow-icon {
  opacity: 0;
  font-size: 18px;
  transition: opacity 0.3s ease, transform 0.5s ease;
}

.sign-in-btn:hover {
  background: #e76b14;
}

.sign-in-btn:hover .sign-in-text {
  opacity: 0;
}

.sign-in-btn:hover .arrow-icon {
  opacity: 1;
  transform: translateX(5px);
}

/* Divider styling */
.divider {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 24px 0;
  color: #9ca3af;
  font-size: 13px;
}

.divider::before,
.divider::after {
  content: '';
  flex: 1;
  border-bottom: 1px solid #9ca3af;
  margin: 0 10px;
}

/* Social media buttons */
.social-buttons {
  display: flex;
  justify-content: center;
  gap: 12px;
}

.social-btn {
  width: 48px;
  height: 48px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  cursor: pointer;
}

.social-btn:hover {
  border-color: #d1d5db;
  background: #f9fafb;
  transform: translateY(-2px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}
/* Responsive design for screens up to 1024px */

@media (max-width: 1024px) {
  .signup-container {
    grid-template-columns: 1fr;
    height: calc(100vh - 70px);
    align-items: center;
    justify-content: center;
  }

  .left-section {
    display: none;
  }

  .right-section {
    height: calc(100vh - 70px);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 24px;
    background: #fff;
  }

  .form-container {
    max-width: 460px;
    width: 100%;
    margin-top: 90px; 
  }

  .etutor-navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: #fff;
    border-bottom: 1px solid #EBEBFF;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 40px;
    z-index: 10;
  }

  body {
    flex-direction: column;
    overflow-y: auto;
  }
}

/* Responsive design for screens up to 640px */

@media (max-width: 640px) {
  .etutor-navbar {
    flex-direction: column;
    gap: 10px;
    padding: 14px 20px;
    text-align: center;
  }

  .etutor-logo-box h2 {
    font-size: 20px;
  }

  .form-container {
    max-width: 340px;
    width: 100%;
    margin-top: 120px;
  }

  .sign-in-title {
    font-size: 22px;
    margin-bottom: 40px;
  }

  .social-btn {
    width: 42px;
    height: 42px;
  }

  .toggle-password {
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    width: 22px;
    height: 22px;
  }

  .password-wrapper input {
    padding: 16px 45px 16px 16px;
    font-size: 15px;
  }
}

     `}</style>
      <nav className="etutor-navbar">
        <div className="etutor-logo-box">
          <Logo drawer={false} onClick={() => { }} />
        </div>
        <div className="etutor-Create-Account">
          <span>Don't have account?</span>
          <button
            onClick={() => {
              navigate("/auth/signup")
            }}
          >Create Account</button>
        </div>
      </nav>

      <div className="signup-container">
        <div className="left-section">
          <div className="content">
            <div className="illustration"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Lottie
                loop
                play
                animationData={animationData}
                style={{ width: "80%", height: "80%" }}
              />
            </div>
          </div>
        </div>
        <div className="right-section">
          <div className="form-container">
            <h2 className="sign-in-title">Sign in to your account</h2>
            <form className="signup-form" onSubmit={handleLogin}>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <div className="password-wrapper">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                  <IconButton onClick={togglePassword} className="toggle-password">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </div>
              </div>

              <div className="options-row">
                <div className="terms-text">
                  <input
                    type="checkbox"
                    id="rememberMe"
                    name="rememberMe"
                    checked={rememberMe}
                    onChange={() => setRememberMe(!rememberMe)}
                  />
                  <label htmlFor="rememberMe">Remember me</label>
                </div>
                <button type="submit" className="sign-in-btn">
                  <span className="sign-in-text">Sign In</span>
                  <ArrowForward className="arrow-icon" />
                </button>
              </div>

              <div className="divider"><span>SIGN IN WITH</span></div>

              <div className="social-buttons">
                <button type="button" className="social-btn google-btn">
                  <svg width="20" height="20" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                </button>

                <button type="button" className="social-btn github-btn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </button>

                <button type="button" className="social-btn twitter-btn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signin;