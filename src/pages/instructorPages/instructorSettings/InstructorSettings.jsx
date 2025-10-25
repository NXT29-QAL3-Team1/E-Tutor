import { useState } from "react";
import "./instructorSettings.css";
import { LinkIcon, GoogleIcon, FacebookIcon, InstagramIcon, TwitterIcon, WhatsAppIcon, YoutubeIcon, EyeIcon, EyeIconNo } from "./Icons";

const InstructorSettings = ({ setProfileImage }) => {
    const [selectedCode, setSelectedCode] = useState("+880");
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [image, setImage] = useState(null);
    const [showPasswords, setShowPasswords] = useState({
        current: false,
        new: false,
        confirm: false,
    });

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        title: "",
        about: "",
        personalWebsite: "",
        facebook: "",
        instagram: "",
        linkedin: "",
        twitter: "",
        whatsapp: "",
        youtube: "",
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
    });

    const [errors, setErrors] = useState({});
    const handleDropdownToggle = () => setDropdownOpen(!dropdownOpen);

    const handleSelectCode = (code) => {
        setSelectedCode(code);
        setDropdownOpen(false);
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) setImage(URL.createObjectURL(file));
        if (file) setProfileImage(URL.createObjectURL(file));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const togglePasswordVisibility = (field) => {
        setShowPasswords((prev) => ({ ...prev, [field]: !prev[field] }));
    };

    const validateSection = (sectionData) => {
        const newErrors = {};

        if (sectionData.includes("firstName") && !formData.firstName.trim()) newErrors.firstName = "First name is required.";
        if (sectionData.includes("lastName") && !formData.lastName.trim()) newErrors.lastName = "Last name is required.";
        if (sectionData.includes("email") && !formData.email.trim()) {
            newErrors.email = "Email is required.";
        } else if (sectionData.includes("email") && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Invalid email format.";
        }
        if (sectionData.includes("phone") && !formData.phone.trim()) newErrors.phone = "Phone number is required.";
        if (sectionData.includes("title") && !formData.title.trim()) newErrors.title = "Title is required.";
        if (sectionData.includes("about") && !formData.about.trim()) newErrors.about = "About field cannot be empty.";
        if (sectionData.includes("image") && !image) newErrors.image = "Please upload a photo.";
        if (sectionData.includes("personalWebsite") && formData.personalWebsite && !/^(https?:\/\/)?([\w-]+(\.[\w-]+)+)([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/.test(formData.personalWebsite)) {
            newErrors.personalWebsite = "Invalid URL format.";
        }
        if (sectionData.includes("facebook") && formData.facebook && !/^(https?:\/\/)?([\w-]+(\.[\w-]+)+)([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/.test(formData.facebook)) {
            newErrors.facebook = "Invalid URL format.";
        }
        if (sectionData.includes("instagram") && formData.instagram && !/^(https?:\/\/)?([\w-]+(\.[\w-]+)+)([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/.test(formData.instagram)) {
            newErrors.instagram = "Invalid URL format.";
        }
        if (sectionData.includes("linkedin") && formData.linkedin && !/^(https?:\/\/)?([\w-]+(\.[\w-]+)+)([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/.test(formData.linkedin)) {
            newErrors.linkedin = "Invalid URL format.";
        }
        if (sectionData.includes("twitter") && formData.twitter && !/^(https?:\/\/)?([\w-]+(\.[\w-]+)+)([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/.test(formData.twitter)) {
            newErrors.twitter = "Invalid URL format.";
        }
        if (sectionData.includes("whatsapp") && formData.whatsapp && !/^(https?:\/\/)?([\w-]+(\.[\w-]+)+)([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/.test(formData.whatsapp)) {
            newErrors.whatsapp = "Invalid URL format.";
        }
        if (sectionData.includes("youtube") && formData.youtube && !/^(https?:\/\/)?([\w-]+(\.[\w-]+)+)([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/.test(formData.youtube)) {
            newErrors.youtube = "Invalid URL format.";
        }
        if (sectionData.includes("currentPassword") && !formData.currentPassword.trim()) newErrors.currentPassword = "Current password is required.";
        if (sectionData.includes("newPassword") && !formData.newPassword.trim()) newErrors.newPassword = "New password is required.";
        else if (sectionData.includes("newPassword") && formData.newPassword.length < 6) newErrors.newPassword = "New password must be at least 6 characters.";
        if (sectionData.includes("confirmPassword") && formData.confirmPassword.trim() !== formData.newPassword.trim()) newErrors.confirmPassword = "Passwords do not match.";

        setErrors((prev) => ({ ...prev, ...newErrors }));
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (section) => (e) => {
        e.preventDefault();
        const fields = {
            personal: ["firstName", "lastName", "email", "phone", "image", "title", "about"],
            social: ["personalWebsite", "facebook", "instagram", "linkedin", "twitter", "whatsapp", "youtube"],
            password: ["currentPassword", "newPassword", "confirmPassword"],
        }[section];

        if (validateSection(fields)) {
            alert(`${section.charAt(0).toUpperCase() + section.slice(1)} section submitted successfully!`);
            console.log("Form Data:", { ...formData, selectedCode, image });
        } else {
            console.log("Validation errors:", errors);
        }
    };

    return (
        <div className="account-settings-wrapper">
            <form className="account-settings-container">
                {/* Personal Info Section */}
                <div className="section">
                    <h2 style={{ fontSize: "24px", fontWeight: "600", color: "#1D2026" }}>
                        Account Settings
                    </h2>
                    <div className="account-flex">
                        <div className="info-fields">
                            {/* Full Name */}
                            <div className="input-group inline">
                                <label>Full Name</label>
                                <div className="name-row">
                                    <input
                                        type="text"
                                        className="input-field"
                                        name="firstName"
                                        placeholder="First name"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                    />
                                    <input
                                        type="text"
                                        className="input-field"
                                        name="lastName"
                                        placeholder="Last name"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                    />
                                </div>
                                {errors.
                                    // @ts-ignore
                                    firstName && <span className="error-text">{errors.firstName}</span>}
                                {errors.
                                    // @ts-ignore
                                    lastName && <span className="error-text">{errors.lastName}</span>}
                            </div>

                            {/* Email */}
                            <div className="input-group inline">
                                <label>Email</label>
                                <input
                                    type="email"
                                    className="input-field"
                                    name="email"
                                    placeholder="Email address"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                {errors.
                                    // @ts-ignore
                                    email && <span className="error-text">{errors.email}</span>}
                            </div>

                            {/* Phone Number */}
                            <div className="input-group inline">
                                <label>Phone Number</label>
                                <div className="phone-input-wrapper">
                                    <div
                                        className="country-code-inside"
                                        onClick={handleDropdownToggle}
                                    >
                                        {selectedCode}
                                        <svg
                                            className={`chevron ${dropdownOpen ? "rotate" : ""}`}
                                            width="14"
                                            height="14"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="#fe7134"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            style={{ marginLeft: "4px" }}
                                        >
                                            <polyline points="6 9 12 15 18 9"></polyline>
                                        </svg>
                                    </div>
                                    <input
                                        type="text"
                                        className="phone-input"
                                        name="phone"
                                        placeholder="Your phone number"
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                    {dropdownOpen && (
                                        <div className="phone-dropdown">
                                            {["+20", "+880", "+1", "+44"].map((code) => (
                                                <div
                                                    key={code}
                                                    className={`phone-option ${selectedCode === code ? "active" : ""}`}
                                                    onClick={() => handleSelectCode(code)}
                                                >
                                                    {code}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                                {errors.
                                    // @ts-ignore
                                    phone && <span className="error-text">{errors.phone}</span>}
                            </div>

                            {/* Title */}
                            <div className="input-group inline title-container">
                                <label>Title</label>
                                <input
                                    type="text"
                                    className={`input-field ${formData.title.length >= 45 ? "warning-border" : ""}`}
                                    name="title"
                                    placeholder="Your title, profession, or short bio"
                                    // @ts-ignore
                                    maxLength="50"
                                    value={formData.title}
                                    onChange={handleChange}
                                />

                                <span className={`char-counter ${formData.title.length === 50 ? "limit" : ""}`}>
                                    {formData.title.length}/50
                                </span>

                                {formData.title.length === 50 && (
                                    <span className="limit-text">You’ve reached the 50-character limit</span>
                                )}

                                {errors.
                                    // @ts-ignore
                                    title && <span className="error-text">{errors.title}</span>}
                            </div>

                            {/* About */}
                            <div className="input-group inline">
                                <label>About</label>
                                <textarea
                                    className="textarea-field"
                                    name="about"
                                    placeholder="Your title, profession, or short biography"
                                    value={formData.about}
                                    onChange={handleChange}
                                ></textarea>
                                {errors.
                                    // @ts-ignore
                                    about && <span className="error-text">{errors.about}</span>}
                            </div>
                        </div>

                        {/* Upload Box */}
                        <div className="upload-box">
                            <div className="image-preview">
                                {image ? (
                                    <img src={image} alt="Preview" className="preview-img" />
                                ) : (
                                    <span className="preview-placeholder">No image selected</span>
                                )}
                            </div>
                            <label className="upload-bar">
                                <input type="file" accept="image/*" onChange={handleImageUpload} />
                                <svg
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#fff"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
                                    <polyline points="7 9 12 4 17 9" />
                                    <line x1="12" y1="4" x2="12" y2="16" />
                                </svg>
                                Upload photo
                            </label>
                            {errors.
                                // @ts-ignore
                                image && <span className="error-text">{errors.image}</span>}
                        </div>
                    </div>
                    <button type="submit" className="save-button" onClick={handleSubmit("personal")}>
                        Save Changes
                    </button>
                </div>

                {/* Social Profile Section */}
                <div className="section" style={{ marginTop: "40px" }}>
                    <h2 style={{ fontSize: "24px", fontWeight: "600", color: "#1D2026" }}>
                        Social Profile
                    </h2>
                    <div className="social-profile">
                        <div className="social-input-group">
                            <div className="social-field inline">
                                <label>Personal Website</label>
                                <div className="input-with-icon">
                                    <LinkIcon />
                                    <input
                                        type="text"
                                        className="input-field"
                                        name="personalWebsite"
                                        placeholder="Personal website or portfolio url..."
                                        value={formData.personalWebsite}
                                        onChange={handleChange}
                                    />
                                </div>
                                {errors.
                                    // @ts-ignore
                                    personalWebsite && <span className="error-text">{errors.personalWebsite}</span>}
                            </div>
                            <div className="social-row">
                                <div className="social-field inline">
                                    <label>Facebook</label>
                                    <div className="input-with-icon">
                                        <FacebookIcon />
                                        <input
                                            type="text"
                                            className="input-field"
                                            name="facebook"
                                            placeholder="Link"
                                            value={formData.facebook}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    {errors.
                                        // @ts-ignore
                                        facebook && <span className="error-text">{errors.facebook}</span>}
                                </div>
                                <div className="social-field inline">
                                    <label>Instagram</label>
                                    <div className="input-with-icon">
                                        <InstagramIcon />
                                        <input
                                            type="text"
                                            className="input-field"
                                            name="instagram"
                                            placeholder="Link"
                                            value={formData.instagram}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    {errors.
                                        // @ts-ignore
                                        instagram && <span className="error-text">{errors.instagram}</span>}
                                </div>
                                <div className="social-field inline">
                                    <label>LinkedIn</label>
                                    <div className="input-with-icon">
                                        <GoogleIcon />
                                        <input
                                            type="text"
                                            className="input-field"
                                            name="linkedin"
                                            placeholder="Link"
                                            value={formData.linkedin}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    {errors.
                                        // @ts-ignore
                                        linkedin && <span className="error-text">{errors.linkedin}</span>}
                                </div>
                            </div>
                            <div className="social-row">
                                <div className="social-field inline">
                                    <label>Twitter</label>
                                    <div className="input-with-icon">
                                        <TwitterIcon />
                                        <input
                                            type="text"
                                            className="input-field"
                                            name="twitter"
                                            placeholder="Link"
                                            value={formData.twitter}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    {errors.
                                        // @ts-ignore
                                        twitter && <span className="error-text">{errors.twitter}</span>}
                                </div>
                                <div className="social-field inline">
                                    <label>WhatsApp</label>
                                    <div className="input-with-icon">
                                        <WhatsAppIcon />
                                        <input
                                            type="text"
                                            className="input-field"
                                            name="whatsapp"
                                            placeholder="Phone number"
                                            value={formData.whatsapp}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    {errors.
                                        // @ts-ignore
                                        whatsapp && <span className="error-text">{errors.whatsapp}</span>}
                                </div>
                                <div className="social-field inline">
                                    <label>YouTube</label>
                                    <div className="input-with-icon">
                                        <YoutubeIcon />
                                        <input
                                            type="text"
                                            className="input-field"
                                            name="youtube"
                                            placeholder="Link"
                                            value={formData.youtube}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    {errors.
                                        // @ts-ignore
                                        youtube && <span className="error-text">{errors.youtube}</span>}
                                </div>
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="save-button" onClick={handleSubmit("social")}>
                        Save Changes
                    </button>
                </div>

                {/* Password Change Section */}
                <div className="section" style={{ marginTop: "40px" }}>
                    <h2 style={{ fontSize: "24px", fontWeight: "600", color: "#1D2026" }}>
                        Change Password
                    </h2>

                    <div className="change-password-section">
                        <div className="password-input-group">

                            {/* Current Password */}
                            <div className="input-group inline">
                                <label>Current Password</label>
                                <div className="input-with-icon">
                                    <input
                                        type={showPasswords.current ? "text" : "password"}
                                        className="input-field"
                                        name="currentPassword"
                                        placeholder="Password"
                                        value={formData.currentPassword}
                                        onChange={handleChange}
                                    />
                                    <span
                                        className="password-toggle"
                                        onClick={() => togglePasswordVisibility("current")}
                                    >
                                        {showPasswords.current ? <EyeIconNo /> : <EyeIcon />}
                                    </span>
                                </div>
                                {errors.
                                    // @ts-ignore
                                    currentPassword && (
                                        <span className="error-text">{errors.
                                            // @ts-ignore
                                            currentPassword}</span>
                                    )}
                            </div>

                            {/* New Password */}
                            <div className="input-group inline">
                                <label>New Password</label>
                                <div className="input-with-icon">
                                    <input
                                        type={showPasswords.new ? "text" : "password"}
                                        className="input-field"
                                        name="newPassword"
                                        placeholder="Password"
                                        value={formData.newPassword}
                                        onChange={handleChange}
                                    />
                                    <span
                                        className="password-toggle"
                                        onClick={() => togglePasswordVisibility("new")}
                                    >
                                        {showPasswords.new ? <EyeIconNo /> : <EyeIcon />}
                                    </span>
                                </div>
                                {errors.
                                    // @ts-ignore
                                    newPassword && (
                                        <span className="error-text">{errors.
                                            // @ts-ignore
                                            newPassword}</span>
                                    )}
                            </div>

                            {/* Confirm Password */}
                            <div className="input-group inline">
                                <label>Confirm Password</label>
                                <div className="input-with-icon">
                                    <input
                                        type={showPasswords.confirm ? "text" : "password"}
                                        className="input-field"
                                        name="confirmPassword"
                                        placeholder="Confirm new password"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                    />
                                    <span
                                        className="password-toggle"
                                        onClick={() => togglePasswordVisibility("confirm")}
                                    >
                                        {showPasswords.confirm ? <EyeIconNo /> : <EyeIcon />}
                                    </span>
                                </div>
                                {errors.
                                    // @ts-ignore
                                    confirmPassword && (
                                        <span className="error-text">{errors.
                                            // @ts-ignore
                                            confirmPassword}</span>
                                    )}
                            </div>

                        </div>

                        <button
                            type="submit"
                            className="save-button"
                            onClick={handleSubmit("password")}
                        >
                            Save Changes
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default InstructorSettings;