
export default function CourseCard({ image, alt, category, price, title, rating, students }) {
    return (
        <div className="course-card">
            <img src={image} alt={alt} className="course-image" />
            <div className="card-content">
                <div className="card-header">
                    <span className={`category-badge category-${category.toLowerCase()}`}>{category}</span>
                    <span className="course-price">${price}</span>
                </div>
                <h4 className="course-title">{title}</h4>
                <div className="card-footer">
                    <div className="footer-item">
                        <svg xmlns="http://www.w3.org/2000/svg" className="footer-icon rating-icon" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <span>{rating}</span>
                    </div>
                    <div className="footer-item">
                        <svg xmlns="http://www.w3.org/2000/svg" className="footer-icon students-icon" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                        </svg>
                        <span className="student-count">{students}</span>
                        <span>students</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
