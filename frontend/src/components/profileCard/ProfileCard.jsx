import './profileCard.css';
import { NavLink } from "react-router-dom";
import { useUser } from "../../contexts/UserProvider";
import { useEffect, useState } from 'react';

function ProfileCard() {

  // @ts-ignore
  const { user } = useUser();
  const [name, setName] = useState(user?.name || "Loading...");
  const [role, setRole] = useState(user?.role || "Loading...");

  useEffect(() => {
    if (user?.name) setName(user.name);
    if (user?.role) setRole(user.role);
  }, [user]);

  return (
    <div className="profile-card">
      <div className="profile-info">
        <div className="profile-picture">
          <img
            src={user?.image || "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png"}
            alt={user?.name}
          />
        </div>
        <div className="user-details">
          <h2 className="user-name">{name}</h2>
          <p className="user-role">{role}</p>
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
          to="/studentDashboard/studentTeachers"
          className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}
        >
          Teachers
        </NavLink>

        <NavLink
          to="/studentDashboard/studentWishlist"
          className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}
        >
          Wishlist
        </NavLink>

        <NavLink
          to="/studentDashboard/settings"
          className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}
        >
          Settings
        </NavLink>
      </nav>
    </div>
  );
}

export default ProfileCard;