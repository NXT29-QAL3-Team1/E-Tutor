import "./WishlistCard.css";
import { useState } from "react";

function WishlistCard({ course }) {
  const [isFavorite, setIsFavorite] = useState(course.isFavorite);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    console.log(
      isFavorite
        ? `Removed from wishlist: ${course.title}`
        : `Added to wishlist: ${course.title}`
    );
  };

  return (
    <div className="wishlist-item">
      <div className="course-info">
        <div className="course-image">
          <img src={course.image} alt={course.title} />
        </div>

        <div className="course-details">
          <div className="course-rating">
            <i className="bi bi-star-fill"></i>
            <span>
              {course.rating} ({course.reviews.toLocaleString()} Reviews)
            </span>
          </div>
          <h3 className="course-title">{course.title}</h3>
          <p className="course-instructors">Course by: {course.instructors}</p>
        </div>
      </div>

      <div className="course-prices">
        <div className="current-price">${course.currentPrice.toFixed(2)}</div>
        <div className="original-price">${course.originalPrice.toFixed(2)}</div>
      </div>

      <div className="course-actions">
        <button className="buy-now-btn">Buy Now</button>
        <button className="add-to-cart-btn">Add To Cart</button>

        <button
          className={`heart-btn ${isFavorite ? "active" : ""}`}
          onClick={toggleFavorite}
        >
          <i className={`bi ${isFavorite ? "bi-heart-fill" : "bi-heart"}`}></i>
        </button>
      </div>
    </div>
  );
}

export default WishlistCard;
