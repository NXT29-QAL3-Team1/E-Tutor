import React, { useState } from "react";
import "./settingsStudent.css";
import 'bootstrap-icons/font/bootstrap-icons.css';

function SettingsPage() {
  const [avatar, setAvatar] = useState(
    "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=300&h=300&fit=crop&crop=face"
  );
  const [passwordVisibility, setPasswordVisibility] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  const togglePassword = (field) => {
    setPasswordVisibility((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result;
      if (typeof result === "string") setAvatar(result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div id="settings-page" className="page-content container">
      
      <section className="settings-section">
        <h1 className="section-title">Account Settings</h1>
        <div className="settings-grid">
          
          <div className="avatar-card">
            <div className="avatar-preview">
              <img src={avatar} alt="User avatar" />
            </div>
            <label className="upload-btn">
              <input
                type="file"
                accept="image/*"
                id="avatar-input"
                hidden
                onChange={handleAvatarChange}
              />
              <i className="bi bi-cloud-upload"></i>
              Upload Photo
            </label>
            <p className="avatar-hint">
              Image size should be under 1MB and image ratio 1:1
            </p>
          </div>

          
          <form className="account-form" id="account-form">
            <div className="two-col">
              <div className="form-field">
                <label>Full Name</label>
                <input type="text" placeholder="First name" id="first-name" />
              </div>
              <div className="form-field">
                <label>&nbsp;</label>
                <input type="text" placeholder="Last name" id="last-name" />
              </div>
            </div>

            <div className="form-field">
              <label>Email</label>
              <input type="email" placeholder="Email address" id="email" />
            </div>

            <div className="form-field">
              <label>Phone Number</label>
              <div className="phone-row">
                <button type="button" className="country-code" id="country-code">
                  +880 <i className="bi bi-chevron-down"></i>
                </button>
                <input type="tel" placeholder="Your phone number..." id="phone" />
              </div>
            </div>

            <button className="primary-btn" id="save-account">
              Save Changes
            </button>
          </form>
        </div>
      </section>

      
      <section className="password-section">
        <h2 className="section-title">Change Password</h2>
        <form className="password-form" id="password-form">
          <div className="password-field">
            <label>Current Password</label>
            <div className="password-input">
              <input
                type={passwordVisibility.current ? "text" : "password"}
                placeholder="Password"
                id="current-password"
              />
              <button
                type="button"
                className="toggle-password"
                onClick={() => togglePassword("current")}
              >
                <i
                  className={`bi ${
                    passwordVisibility.current ? "bi-eye-slash" : "bi-eye"
                  }`}
                ></i>
              </button>
            </div>
          </div>

          <div className="two-col">
            <div className="password-field">
              <label>New Password</label>
              <div className="password-input">
                <input
                  type={passwordVisibility.new ? "text" : "password"}
                  placeholder="New password"
                  id="new-password"
                />
                <button
                  type="button"
                  className="toggle-password"
                  onClick={() => togglePassword("new")}
                >
                  <i
                    className={`bi ${
                      passwordVisibility.new ? "bi-eye-slash" : "bi-eye"
                    }`}
                  ></i>
                </button>
              </div>
            </div>

            <div className="password-field">
              <label>Confirm Password</label>
              <div className="password-input">
                <input
                  type={passwordVisibility.confirm ? "text" : "password"}
                  placeholder="Confirm new password"
                  id="confirm-password"
                />
                <button
                  type="button"
                  className="toggle-password"
                  onClick={() => togglePassword("confirm")}
                >
                  <i
                    className={`bi ${
                      passwordVisibility.confirm ? "bi-eye-slash" : "bi-eye"
                    }`}
                  ></i>
                </button>
              </div>
            </div>
          </div>

          <button className="primary-btn" id="change-password">
            Change Password
          </button>
        </form>
      </section>
    </div>
  );
}

export default SettingsPage;
