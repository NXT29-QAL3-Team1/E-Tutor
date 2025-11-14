// Reusable Components
import Header from './components/Header';
import AboutInstructor from './components/AboutInstructor';
import CoursesSection from './components/CoursesSection';

// CSS
import './instructorInfo.css';

export default function InstructorInfo() {
    return (
        <div className="container">
            <div className="header-background"></div>
            <div className="main-content">
                <Header />
                <main className="main-grid">
                    <AboutInstructor />
                    <CoursesSection />
                </main>
            </div>
        </div>
    )
}
