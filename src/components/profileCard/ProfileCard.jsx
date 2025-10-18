import './profileCard.css';
import { NavLink } from "react-router-dom";

function ProfileCard() {
  return (
    <div className="profile-card">
      <div className="profile-info">
        <div className="profile-picture">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face"
            alt="Kevin Gilbert"
          />
        </div>
        <div className="user-details">
          <h2 className="user-name">Kevin Gilbert</h2>
          <p className="user-role">Student</p>
        </div>
      </div>

      <nav className="main-navigation">
        <NavLink
          to="/studentDashboard"
          className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}
          end
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/studentDashboard/studentCourses"
          className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}
        >
          Courses
        </NavLink>

        <NavLink
          to="/dashboard/teachers"
          className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}
        >
          Teachers
        </NavLink>

        <NavLink
          to="/dashboard/wishlist"
          className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}
        >
          Wishlist
        </NavLink>

        <NavLink
          to="/dashboard/settings"
          className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}
        >
          Settings
        </NavLink>
      </nav>

      <button className="become-instructor-btn">
        Become Instructor →
      </button>
    </div>
  );
}

export default ProfileCard;
