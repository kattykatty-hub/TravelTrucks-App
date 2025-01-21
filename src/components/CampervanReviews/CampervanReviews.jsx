import React from "react";
import { useSelector } from "react-redux"; // Importing useSelector for accessing Redux state
import { selectCamperDetails } from "../../redux/selectors"; // Importing selector for camper details
import ReactStars from "react-rating-stars-component"; // Importing ReactStars for star ratings
import css from "./CampervanReviews.module.css"; // Importing CSS styles

const CampervanReviews = () => {
  const details = useSelector(selectCamperDetails); // Getting camper details from Redux state

  const avatarLetterFormatter = (name) => {
    return name.charAt(0); // Extracting the first letter of the reviewer's name for the avatar
  };

  return (
    <div className={css.reviewsContainer}>
      {details.reviews.map((review, index) => (
        <div key={index} className={css.review}>
          <div className={css.reviewTopContainer}>
            <div className={css.avatarContainer}>
              <h2 className={css.avatarLetter}>
                {avatarLetterFormatter(review.reviewer_name)} {/* Displaying avatar letter */}
              </h2>
            </div>
            <div className={css.authorRatingContainer}>
              <p className={css.reviewAuthor}>{review.reviewer_name}</p> {/* Reviewer's name */}
              <ReactStars
                value={review.reviewer_rating}
                size={20}
                edit={false} // Disable editing for the rating
              />
            </div>
          </div>
          <p className={css.reviewText}>{review.comment}</p> {/* Review comment */}
        </div>
      ))}
    </div>
  );
};

export default CampervanReviews; // Exporting the combined component
