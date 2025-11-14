import ProfileCard from '../../../components/profileCard/ProfileCard';
import { Outlet } from 'react-router-dom';
import './studentDashRoot.css';

export default function StudentDashRoot() {
    return (
        <div>
            <ProfileCard />

            <Outlet />
        </div>
    )
}