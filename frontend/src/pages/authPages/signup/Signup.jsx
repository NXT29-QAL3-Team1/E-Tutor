import React, { useState } from 'react';
import { IconButton, Radio, RadioGroup, FormControlLabel, FormLabel, FormControl, Stack } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router-dom';
import Logo from '../../../components/Logo';
import axios from 'axios';
import { useUser } from "../../../contexts/UserProvider";
import Lottie from 'react-lottie-player';
import animationData from '../assets/Launch.json';
function Signup() {
  const navigate = useNavigate();

  // @ts-ignore
  const { setUser } = useUser();

  const [role, setRole] = useState('student'); // default value

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [usernameError, setUsernameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [passwordStrength, setPasswordStrength] = useState({ label: '', color: '#e6e6e6', width: '0%' });

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    return re.test(String(email).toLowerCase());
  }

  function validateUsername(username) {
    return username.length >= 3;
  }

  function calcPasswordScore(pw) {
    let score = 0;
    if (!pw) return score;
    if (pw.length >= 8) score += 2;
    else if (pw.length >= 6) score += 1;
    if (/[a-z]/.test(pw) && /[A-Z]/.test(pw)) score += 1;
    if (/\d/.test(pw)) score += 1;
    if (/[!@#$%^&*(),.?":{}|<>_\-\\\/\[\]=+;`~]/.test(pw)) score += 2;
    return score;
  }

  function strengthToLabel(score) {
    if (score <= 1) return { label: 'Very weak', color: '#ef4444', width: '10%' };
    if (score <= 2) return { label: 'Weak', color: '#f97316', width: '35%' };
    if (score <= 3) return { label: 'Medium', color: '#f59e0b', width: '60%' };
    return { label: 'Strong', color: '#f97316', width: '100%' };
  }

  const handleUsernameChange = (e) => {
    const val = e.target.value.trim();
    setUsername(val);
    if (!val) {
      setUsernameError('');
      return;
    }
    if (!validateUsername(val)) {
      setUsernameError('Username must be at least 3 characters.');
    } else {
      setUsernameError('');
    }
  };

  const handleEmailChange = (e) => {
    const val = e.target.value.trim();
    setEmail(val);
    if (!val) {
      setEmailError('');
      return;
    }
    if (!validateEmail(val)) {
      setEmailError('Please enter a valid email address.');
    } else {
      setEmailError('');
    }
  };

  const handlePasswordChange = (e) => {
    const val = e.target.value;
    setPassword(val);
    const score = calcPasswordScore(val);
    const res = strengthToLabel(score);
    setPasswordStrength(res);
    if (val.length > 0 && score <= 1) {
      setPasswordError('Password is too weak — try adding length, numbers, and symbols.');
    } else {
      setPasswordError('');
    }
    if (confirmPassword && val !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match.');
    } else {
      setConfirmPasswordError('');
    }
  };

  const handleConfirmPasswordChange = (e) => {
    const val = e.target.value;
    setConfirmPassword(val);
    if (val && val !== password) {
      setConfirmPasswordError('Passwords do not match.');
    } else {
      setConfirmPasswordError('');
    }
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    let valid = true;

    const usernameVal = username.trim();
    if (!usernameVal || !validateUsername(usernameVal)) {
      setUsernameError('Username must be at least 3 characters.');
      valid = false;
    } else {
      setUsernameError('');
    }

    const emailVal = email.trim();
    if (!emailVal || !validateEmail(emailVal)) {
      setEmailError('Please enter a valid email address.');
      valid = false;
    } else {
      setEmailError('');
    }

    const score = calcPasswordScore(password);
    if (score <= 1) {
      setPasswordError('Password is too weak. Use 8+ chars, numbers, and symbols.');
      valid = false;
    } else {
      setPasswordError('');
    }

    if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match.');
      valid = false;
    } else {
      setConfirmPasswordError('');
    }

    if (!termsAccepted) {
      alert('Please agree to the Terms & Conditions.');
      valid = false;
    }

    if (!valid) return;

    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', {
        name: `${firstName} ${lastName}`,
        email,
        password,
        role
      });

      // لو ناجح، نقدر نخزن الـ JWT أو نعمل redirect
      const { token, user } = res.data;
      console.log(res.data);
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      setUser(res.data); // لأن السيرفر بيرجع user مباشرة
      // redirect حسب الدور 
      if (user.role === 'student') navigate('/studentDashboard');
      else if (user.role === 'instructor') navigate('/instructorDashboard');

    } catch (err) {
      console.log(err.response?.data || err.message);
      alert(err.response?.data?.message || 'Something went wrong');
    }
    setFirstName('');
    setLastName('');
    setUsername('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setTermsAccepted(false);
    setPasswordStrength({ label: '', color: '#e6e6e6', width: '0%' });
  };

  return (
    <>
      <style>{`

    /* ==================== Global Reset ==================== */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Roboto, sans-serif;
  background: #fff;
  min-height: 100vh;
  display: flex;
}

/* ==================== Navbar ==================== */
.etutor-navbar {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 240px;
  background-color: #fff;
  border-bottom: 1px solid #EBEBFF;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
}

.etutor-logo-box {
  display: flex;
  align-items: center;
  gap: 8px;
}

.etutor-logo-box img {
  width: 30px;
  height: 30px;
}

.etutor-logo-box h2 {
  color: #2c2c2c;
  font-weight: 600;
  font-size: 24px;
  margin-top: 5px;
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

/* ==================== Signup Layout ==================== */
.signup-container {
  padding-top: 60px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  width: 100%;
  min-height: 100vh;
}

/* ==================== Left Section ==================== */
.left-section {
  background: #EBEBFF;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 16px;
  text-align: center;
  width: 600px;
  position: relative;
  overflow: hidden;
}

.illustration {
  width: 100%;
  max-width: 600px;
  height: auto;
  display: block;
  margin-left: auto;
  margin-right: auto;
  position: fixed;
  top: 50%;
  left: 0;
  transform: translateY(-40%);
  z-index: 5;
}

.subtitle {
  font-size: 17px;
  color: #6b7280;
  margin-bottom: 60px;
}

.illustration img {
  width: 100%;
  max-width: 600px;
  height: auto;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

/* ==================== Right Section ==================== */
.right-section {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  padding: 48px;
}

/* ==================== Form Container ==================== */
.form-container {
  max-width: 440px;
  width: 100%;
}

.form-container h2 {
  font-size: 25px;
  font-weight: 500;
  color: #1a1a1a;
  margin-bottom: 27px;
}

.account-text {
  font-size: 14px;
  color: #6b7280;
  margin-bottom: 40px;
}

.get-started-link {
  color: #f97316;
  text-decoration: none;
  font-weight: 600;
  margin-left: 4px;
}

/* ==================== Form Inputs ==================== */
.signup-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 500px;
}

.name-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
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

.form-group input::placeholder {
  color: #9ca3af;
  font-size: 13.5px;
  opacity: 0.8;
  font-weight: 400;
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

/* ==================== Password Field ==================== */
.password-input {
  position: relative;
}

.password-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.password-wrapper input {
  width: 100%;
  padding: 18px 48px 18px 20px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 15.5px;
  background: #fff;
  transition: border-color 0.2s, box-shadow 0.2s;
  color: #374151;
}

.password-wrapper input::placeholder {
  color: #9ca3af;
  font-size: 13.5px;
  opacity: 0.8;
  font-weight: 400;
}

.password-wrapper input:focus {
  outline: none;
  border-color: #f97316;
  box-shadow: 0 0 0 2px rgba(249, 115, 22, 0.1);
}

.password-input label {
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
  z-index: 3;
}

.toggle-password {
  position: absolute;
  right: 15px;
  top: 30px;
  z-index: 1;
  transform: translateY(-50%);
  padding: 0;
  margin: 0;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.toggle-password svg {
  font-size: 22px;
}

input[type="password"]::-ms-reveal,
input[type="password"]::-webkit-textfield-decoration-container,
input[type="password"]::-webkit-clear-button {
  display: none !important;
}

/* ==================== Helper & Feedback ==================== */
.helper-text {
  font-size: 12px;
  font-weight: 400;
  color: #9ca3af;
  margin-top: 4px;
  letter-spacing: 0.1px;
}

.feedback {
  font-size: 12px;
  color: #ef4444;
  margin-top: -20px;
  display: none;
}

.feedback:not(:empty) {
  display: block;
}

/* ==================== Password Strength Bar ==================== */
.strength-bar {
  height: 4px;
  width: 0%;
  background: #e6e6e6;
  border-radius: 2px;
  margin-top: 8px;
  transition: width 0.3s ease, background 0.3s ease;
}

.strength-text {
  font-size: 12px;
  margin-top: 4px;
  color: #6b7280;
}

.strength-text.strong {
  color: #f97316;
}

/* ==================== Terms Section ==================== */
.terms-row {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
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

.terms-link {
  color: #1a1a1a;
  font-weight: 450;
  text-decoration: none;
}

/* ==================== Button ==================== */
.create-account-btn {
  width: 100%;
  padding: 12px;
  background: #f97316;
  color: #fff;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
  margin-top: 8px;
}

.create-account-btn:hover {
  background: #e76b14;
}

/* ==================== Divider ==================== */
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
  opacity: 40%;
  margin: 0 10px;
}

/* ==================== Social Buttons ==================== */
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
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
}

/* ==================== Responsive Design ==================== */

@media (max-width: 1200px) {
  .etutor-navbar {
    padding: 14px 80px;
  }
}

@media (max-width: 1024px) {
  .left-section {
    display: none;
  }

  .signup-container {
    grid-template-columns: 1fr;
    padding-top: 80px;
    min-height: calc(100vh - 80px);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .right-section {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px 20px;
  }

  .form-container {
    max-width: 480px;
    width: 100%;
  }

  .etutor-navbar {
    padding: 14px 40px;
    background-color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    border-bottom: 1px solid #EBEBFF;
    z-index: 1000;
  }

  body {
    flex-direction: column;
    overflow-x: hidden;
  }

  .password-wrapper input {
    padding: 16px 45px 16px 16px;
  }
}

@media (max-width: 768px) {
  .etutor-navbar {
    flex-direction: column;
    gap: 8px;
    padding: 14px 24px;
    text-align: center;
  }

  .etutor-Create-Account span {
    font-size: 12px;
  }

  .etutor-Create-Account button {
    font-size: 12px;
    padding: 8px 14px;
  }

  .form-container {
    max-width: 400px;
  }

  .form-container h2 {
    font-size: 22px;
  }

  .social-btn {
    width: 44px;
    height: 44px;
  }

 
  .toggle-password {
    right: 12px !important;
    top: 50% !important;
    transform: translateY(-50%);
    width: 22px;
    height: 22px;
  }
}

@media (max-width: 480px) {
  .etutor-navbar {
    padding: 10px 16px;
  }

  .form-container {
    max-width: 340px;
    width: 100%;
  }

  .form-container h2 {
    font-size: 20px;
  }

  .name-row {
    grid-template-columns: 1fr;
    gap: 10px;
  }

 
  .toggle-password {
    right: 10px !important; 
    top: 50% !important;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
  }

  .password-wrapper input {
    padding: 14px 40px 14px 14px;
    font-size: 15px;
  }
}
  `}</style>

      <nav className="etutor-navbar">
        <div className="etutor-logo-box">
          <Logo drawer={false} onClick={() => { }} />
        </div>
        <div className="etutor-Create-Account">
          <span>Already have account?</span>
          <button
            onClick={() => {
              navigate("/auth")
            }}
          >Sign In</button>
        </div>
      </nav>
      <div className="signup-container">
        <div className="left-section">
          <div className="content">
            <div className="illustration">
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
            <h2>Get started absolutely free</h2>
            <p className="account-text">
              Already have an account?
              <span className="get-started-link"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  navigate("/auth");
                }}
              >Get started</span>
            </p>
            <form className="signup-form" onSubmit={handleSignupSubmit}>
              <div className="name-row">
                <div className="form-group">
                  <label htmlFor="firstName">First name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={username}
                  onChange={handleUsernameChange}
                  aria-invalid={usernameError ? 'true' : 'false'}
                />
                {usernameError && <div className="feedback">{usernameError}</div>}
              </div>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={handleEmailChange}
                  aria-invalid={emailError ? 'true' : 'false'}
                />
                {emailError && <div className="feedback">{emailError}</div>}
              </div>
              <div className="name-row">
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <div className="password-container">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      name="password"
                      value={password}
                      onChange={handlePasswordChange}
                    />
                    {password.length > 0 && (
                      <IconButton onClick={togglePassword} className="toggle-password">
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    )}
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <div className="password-container">
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      id="confirmPassword"
                      name="confirmPassword"
                      value={confirmPassword}
                      onChange={handleConfirmPasswordChange}
                    />
                    {confirmPassword.length > 0 && (
                      <IconButton onClick={toggleConfirmPassword} className="toggle-password">
                        {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    )}
                  </div>
                </div>
              </div>
              {passwordError && <div className="feedback">{passwordError}</div>}
              {confirmPasswordError && <div className="feedback">{confirmPasswordError}</div>}
              <div className="strength-bar" style={{ width: passwordStrength.width, background: passwordStrength.color }}></div>
              <div className="strength-text">{passwordStrength.label}</div>
              <div className="terms-row">
                <FormControl>
                  <FormLabel id="demo-radio-buttons-group-label">Role</FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    value={role} // بدل defaultValue
                    onChange={(e) => setRole(e.target.value)}
                    name="radio-buttons-group"
                  >
                    <Stack direction="row">
                      <FormControlLabel value="student" control={<Radio />} label="Student" />
                      <FormControlLabel value="instructor" control={<Radio />} label="Instructor" />
                    </Stack>
                  </RadioGroup>

                </FormControl>
                <div className="terms-text">
                  <input
                    type="checkbox"
                    id="terms"
                    name="terms"
                    checked={termsAccepted}
                    onChange={() => setTermsAccepted(!termsAccepted)}
                  />
                  <label htmlFor="terms">
                    I Agree with all of your <a href="#" className="terms-link">Terms & Conditions</a>
                  </label>
                </div>

                <button type="submit" className="create-account-btn">
                  Create account
                </button>
              </div>
              <div className="divider"><span>OR</span></div>
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

export default Signup;