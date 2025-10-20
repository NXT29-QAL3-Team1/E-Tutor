import './teacherCard.css';

function TeacherCard({ name, role, rating, students, image }) {
  return (
    <div className="instructor-card">
      <div className="instructor-image">
        <img src={image} alt={name} />
      </div>
      <div className="instructor-info">
        <h3 className="instructor-name">{name}</h3>
        <p className="instructor-role">{role}</p>
        <div className="instructor-rating">
          <i className="fas fa-star"></i>
          <span>{rating}</span>
        </div>
        <p className="instructor-students">{students.toLocaleString()} students</p>
        <button className="send-message-btn">Send Message</button>
      </div>
    </div>
  );
}

export default TeacherCard;