import React from "react";
import { FaStar } from "react-icons/fa6";
import mapIcon from "../../assets/icons/map-icon.svg";
import css from "./RatingLocationDetails.module.css";

const RatingLocationDetails = ({ rating, location, reviews }) => {
  return (
    <div className={css.container}>
      <div className={css.rating}>
        <FaStar className={css.starIcon} />
        <p className={css.ratingText}>
          {rating} ({reviews.length} {reviews.length === 1 ? "Review" : "Reviews"})
        </p>
      </div>
      <div className={css.location}>
        <img src={mapIcon} alt="map icon" className={css.mapIcon} />
        <p className={css.ratingText}>{location}</p>
      </div>
    </div>
  );
};

export default RatingLocationDetails;

