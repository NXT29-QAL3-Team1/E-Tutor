import DashboardInfo from '../../../components/studentdashInfo/DashboardInfo';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import courses from './courses';
import Card from '../../../components/cards/Card';

import './dashboard.css';

export default function StudentDashboard() {
    return (
        <div className="container">
            <DashboardInfo />
            <div className="section-header">
                <h1 className="section-title">Let's start learning, Kevin</h1>
                <div className="navigation-buttons">
                    <button className="nav-btn">
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </button>
                    <button className="nav-btn">
                        <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                </div>
            </div>

            <div className="courses-grid">
                {courses.map((course) => (
                    <Card
                        key={course.id}
                        image={course.image}
                        title={course.title}
                        description={course.description}
                        completion={course.completion}
                    />
                ))}
            </div>
        </div>
    )
}