// MUI Icons
import { FacebookOutlined, Twitter, Instagram, YouTube, WhatsApp } from '@mui/icons-material';

export default function Header() {
    return (
        <header className="header-card">
            <div className="header-content">
                <div className="avatar-container">
                    <div className="avatar-bg">
                        <img src="/imgs/Profile.jpg" alt="Vako Shvili" className="avatar-image" />
                    </div>
                </div>
                <div className="instructor-details">
                    <div className="instructor-title-container">
                        <h1 className="instructor-name">Vako Shvili</h1>
                        <span className="top-rated-badge">
                            <i className="fas fa-crown" style={{ color: 'var(--brand-orange)' }}></i>
                            Top Rated
                        </span>
                    </div>
                    <p className="instructor-title">Web Designer & Best-Selling Instructor</p>
                    <div className="instructor-stats">
                        <div className="stat-item">
                            <svg xmlns="http://www.w3.org/2000/svg" className="stat-icon rating-icon" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                            <span className="font-semibold">4.8</span>
                            <span className="stat-label">(134,633 review)</span>
                        </div>
                        <div className="stat-item">
                            <svg xmlns="http://www.w3.org/2000/svg" className="stat-icon students-icon" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path>
                            </svg>
                            <span className="font-semibold">430,117</span>
                            <span className="stat-label">students</span>
                        </div>
                        <div className="stat-item">
                            <svg xmlns="http://www.w3.org/2000/svg" className="stat-icon courses-icon" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path>
                            </svg>
                            <span className="font-semibold">7</span>
                            <span className="stat-label">courses</span>
                        </div>
                    </div>
                </div>
                <div className="contact-info">
                    <a href="https://www.vakoshvili.com" target="_blank" rel="noopener noreferrer" className="website-link">
                        <i className="fas fa-globe" style={{ color: 'var(--blue-600)' }}></i>
                        https://www.vakoshvili.com
                    </a>
                    <div className="social-links">
                        <a href="#" className="social-link-item"><FacebookOutlined className="fab fa-facebook-f social-icon" /></a>
                        <a href="#" className="social-link-item"><Twitter className="fab fa-twitter social-icon" /></a>
                        <a href="#" className="social-link-item"><Instagram className="fab fa-instagram social-icon" /></a>
                        <a href="#" className="social-link-item"><YouTube className="fab fa-youtube social-icon" /></a>
                        <a href="#" className="social-link-item"><WhatsApp className="fab fa-whatsapp social-icon" /></a>
                    </div>
                </div>
            </div>
        </header>
    )
}
