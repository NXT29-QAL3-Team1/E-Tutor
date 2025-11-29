import DashboardInfo from '../../../components/dashboardInfo/DashboardInfo';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import courses from './courses';
import Card from '../../../components/cards/Card';

import './studentDashboard.css';

import { useUser } from "../../../contexts/UserProvider";

export default function StudentDashboard() {

    // @ts-ignore
    const { user, loading } = useUser();

    return (
        <div className="container">
            <section className="dashboard-section">
                <h1 className="section-title">Dashboard</h1>

                <div className="stats-grid">
                    <DashboardInfo color="peach" icon="bi bi-book" data={{ title: "Courses", number: "0" }} />
                    <DashboardInfo color="purple" icon="bi bi-bookmark-heart" data={{ title: "Wishlist", number: "0" }} />
                    <DashboardInfo color="green" icon="bi bi-cart" data={{ title: "Cart", number: "0" }} />
                    <DashboardInfo color="orange" icon="bi bi-person-vcard" data={{ title: "Instructors", number: "0" }} />
                </div>
            </section>
            <div className="section-header">
                <h1 className="section-title">Let's start learning, {user?.name}</h1>
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