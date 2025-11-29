import Card from "../../../components/cards/Card";
import "./studentCourses.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import courses from "../studentDashboard/courses";
import Pagination from '../../../components/Pagination';

function Courses() {
  const number_of_courses = courses.length; // Count dynamically

  return (
    <>
      <div id="courses-page" className="page-content container">
        <section className="courses-section">
          <h1 className="section-title">Courses ({number_of_courses})</h1>

          <div className="search-sort-bar">
            <div className="search-container">
              <label htmlFor="course-search">Search:</label>
              <div className="search-input-wrapper">
                <i className="bi bi-search"></i>
                <input
                  type="text"
                  id="course-search"
                  placeholder="Search courses..."
                  className="search-input"
                />
              </div>
            </div>

            <div className="sort-container">
              <label htmlFor="course-sort">Sort by</label>
              <select id="course-sort" className="sort-select">
                <option value="latest">Latest</option>
                <option value="popular">Popular</option>
                <option value="rating">Rating</option>
                <option value="price">Price</option>
              </select>
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

          <Pagination />
        </section>
      </div>
    </>
  );
}

export default Courses;
