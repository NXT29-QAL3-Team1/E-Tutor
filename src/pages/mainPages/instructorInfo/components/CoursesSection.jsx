// Reusable Components
import CourseCard from './CourseCard';
import Reviews from '../../../../components/reviews/Reviews';

export default function CoursesSection() {
    const courses = [
        {
            image: "/imgs/course4.jpg",
            alt: "Machine Learning A-Z™: Hands-On Python & R In Data Science",
            category: "DEVELOPMENTS",
            price: 57,
            title: "Machine Learning A-Z™: Hands-On Python & R In Data Science",
            rating: "5.0",
            students: "265.7K",
        },
        {
            image: "/imgs/course3.jpg",
            alt: "Selenium WebDriver with Java -Basics to Advanced+Frameworks",
            category: "BUSINESS",
            price: 57,
            title: "Selenium WebDriver with Java -Basics to Advanced+Frameworks",
            rating: "5.0",
            students: "265.7K",
        },
        {
            image: "/imgs/course2.jpg",
            alt: "Data Structures & Algorithms Essentials (2021)",
            category: "DEVELOPMENTS",
            price: 57,
            title: "Data Structures & Algorithms Essentials (2021)",
            rating: "5.0",
            students: "265.7K",
        },
        {
            image: "/imgs/course1.jpg",
            alt: "Complete Adobe Lightroom Megacourse: Beginner to Expert",
            category: "DEVELOPMENTS",
            price: 57,
            title: "Complete Adobe Lightroom Megacourse: Beginner to Expert",
            rating: "5.0",
            students: "265.7K",
        },
    ];

    return (
        <div className="courses-section">
            <div>
                <div className="tabs-container">
                    <nav className="tabs-nav" aria-label="Tabs">
                        <button className="tab-button active">Courses</button>
                    </nav>
                </div>
                <div className="tab-content">
                    <div>
                        <h3 className="courses-heading">Vako Courses (04)</h3>
                        <div className="courses-grid">
                            {courses.map((course, index) => (
                                <CourseCard key={index} {...course} />
                            ))}
                        </div>
                    </div>
                    <Reviews />
                </div>
            </div>
        </div>
    )
}
