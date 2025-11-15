import React, { useState } from 'react';
import './ٍSignup.css';
import { IconButton } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export default function Signup() {
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
  const [passwordStrength, setPasswordStrength] = useState({
    label: '',
    color: '#e6e6e6',
    width: '0%',
  });

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

  const handleSubmit = (e) => {
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

    alert('Form is valid — ready to submit!');
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
      <nav className="etutor-navbar">
        <div className="etutor-logo-box">
          <img src="/imgs/gradd.png" alt="logo" />
          <h2>E-tutor</h2>
        </div>
        <div className="etutor-Create-Account">
          <span>Already have account?</span>
          <button>Sign In</button>
        </div>
      </nav>

      <div className="signup-container">
        <div className="left-section">
          <div className="content">
            <div className="illustration">
              <img src="./imgs/saly-1.png" alt="img" />
            </div>
          </div>
        </div>

        <div className="right-section">
          <div className="form-container">
            <h2>Get started absolutely free</h2>
            <p className="account-text">
              Already have an account?
              <a href="#" className="get-started-link">Get started</a>
            </p>

            <form className="signup-form" onSubmit={handleSubmit}>
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

              <div
                className="strength-bar"
                style={{
                  width: passwordStrength.width,
                  background: passwordStrength.color,
                }}
              ></div>
              <div className="strength-text">{passwordStrength.label}</div>

              <div className="terms-row">
                <div className="terms-text">
                  <input
                    type="checkbox"
                    id="terms"
                    name="terms"
                    checked={termsAccepted}
                    onChange={() => setTermsAccepted(!termsAccepted)}
                  />
                  <label htmlFor="terms">
                    I Agree with all of your{' '}
                    <a href="#" className="terms-link">Terms &amp; Conditions</a>
                  </label>
                </div>

                <button type="submit" className="create-account-btn">
                  Create account
                </button>
              </div>

              <div className="divider">
                <span>OR</span>
              </div>

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
