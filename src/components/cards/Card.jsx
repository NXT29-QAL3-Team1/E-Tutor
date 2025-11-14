import './card.css';

function Card({ image, title, description, completion }) {
  return (
    <div className="course-card">
      <div className="course-image">
        <img src={image} alt={title} />
      </div>

      <div className="course-content">
        <h3 className="course-title">{title}</h3>
        <p className="course-description">{description}</p>

        <div className="course-footer">
          <button className="watch-lecture-btn">Watch Lecture</button>
          {completion && (
            <span className="completion-badge">
              {completion} Completed
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
