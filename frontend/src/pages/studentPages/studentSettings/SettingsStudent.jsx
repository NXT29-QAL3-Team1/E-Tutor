import axios from "axios";
import React, { useEffect, useState } from "react";
import "./settingsStudent.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useUser } from "../../../contexts/UserProvider";

function SettingsPage() {
  // @ts-ignore
  const { user, updateUser } = useUser();

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const token = localStorage.getItem("token");

  const [avatar, setAvatar] = useState(
    user?.image || "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png"
  );
  const [firstName, setFirstName] = useState(user?.name?.split(" ")[0] || "");
  const [lastName, setLastName] = useState(user?.name?.split(" ")[1] || "");
  const [email, setEmail] = useState(user?.email || "");
  const [phone, setPhone] = useState(user?.phone || "");

  useEffect(() => {
    if (user) {
      setAvatar(user.image || "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png");
      setFirstName(user.name?.split(" ")[0] || "");
      setLastName(user.name?.split(" ")[1] || "");
      setEmail(user.email || "");
      setPhone(user.phone || "");
    }
  }, [user]);

  const [passwordVisibility, setPasswordVisibility] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  const handleChangePassword = async (e) => {
    e.preventDefault();

    if (!currentPassword || !newPassword || !confirmPassword) {
      alert("Please fill all password fields.");
      return;
    }
    if (newPassword !== confirmPassword) {
      alert("New password and confirm password do not match.");
      return;
    }

    try {
      const token = localStorage.getItem("token");
      await axios.patch(
        "http://localhost:5000/api/auth/change-password",
        { userId: user.id, currentPassword, newPassword, confirmPassword },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      alert("Password updated successfully!");

      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (err) {
      console.log(err);
      alert(err.response?.data?.message || "Error updating password.");
    }
  };

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

  const handleSave = async (e) => {
    e.preventDefault();

    // فاليديشن بسيط
    if (!firstName || !lastName || !email) {
      alert("Please fill in all required fields.");
      return;
    }

    try {
      const token = localStorage.getItem("token");

      const res = await axios.patch(
        "http://localhost:5000/api/auth/update-profile",
        { firstName, lastName, email, phone, avatar },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      updateUser(res.data);

      console.log("Updated", res.data);

      // تفريغ الفورم بعد الحفظ
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setAvatar("https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png");

      alert("Profile updated successfully!");
    } catch (err) {
      console.log(err);
    }
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

          <form className="account-form" id="account-form" onSubmit={handleSave}>
            <div className="two-col">
              <div className="form-field">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="First name"
                  id="first-name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="form-field">
                <label>&nbsp;</label>
                <input
                  type="text"
                  placeholder="Last name"
                  id="last-name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>

            <div className="form-field">
              <label>Email</label>
              <input
                type="email"
                placeholder="Email address"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-field">
              <label>Phone Number</label>
              <div className="phone-row">
                <button type="button" className="country-code" id="country-code"
                  style={{ cursor: "default" }}
                >
                  +20
                </button>
                <input
                  type="tel"
                  placeholder="Your phone number..."
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>

            <button className="primary-btn" id="save-account" type="submit">
              Save Changes
            </button>
          </form>
        </div>
      </section>

      <section className="password-section">
        <h2 className="section-title">Change Password</h2>
        <form className="password-form" onSubmit={handleChangePassword}>
          <div className="password-field">
            <label>Current Password</label>
            <div className="password-input">
              <input type={passwordVisibility.current ? "text" : "password"} placeholder="Password" value={currentPassword} onChange={e => setCurrentPassword(e.target.value)} />
              <button type="button" className="toggle-password" onClick={() => togglePassword("current")}>
                <i className={`bi ${passwordVisibility.current ? "bi-eye-slash" : "bi-eye"}`}></i>
              </button>
            </div>
          </div>

          <div className="two-col">
            <div className="password-field">
              <label>New Password</label>
              <div className="password-input">
                <input type={passwordVisibility.new ? "text" : "password"} placeholder="New password" value={newPassword} onChange={e => setNewPassword(e.target.value)} />
                <button type="button" className="toggle-password" onClick={() => togglePassword("new")}>
                  <i className={`bi ${passwordVisibility.new ? "bi-eye-slash" : "bi-eye"}`}></i>
                </button>
              </div>
            </div>

            <div className="password-field">
              <label>Confirm Password</label>
              <div className="password-input">
                <input type={passwordVisibility.confirm ? "text" : "password"} placeholder="Confirm new password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
                <button type="button" className="toggle-password" onClick={() => togglePassword("confirm")}>
                  <i className={`bi ${passwordVisibility.confirm ? "bi-eye-slash" : "bi-eye"}`}></i>
                </button>
              </div>
            </div>
          </div>

          <button className="primary-btn" type="submit">Change Password</button>
        </form>
      </section>
    </div>
  );
}

export default SettingsPage;
