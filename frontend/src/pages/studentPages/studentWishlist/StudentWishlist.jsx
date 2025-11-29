import "./studentWishlist.css";
import WishlistCard from "../../../components/wishlistCard/WishlistCard";
import { wishlistData } from "./wishlistData";

function StudentWishlist() {
  return (
    <div id="wishlist-page" className="page-content container">
      <section className="wishlist-section">
        <h1 className="section-title">Wishlist ({wishlistData.length})</h1>

        <div className="wishlist-items">
          {wishlistData.map((course) => (
            <WishlistCard key={course.id} course={course} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default StudentWishlist;
