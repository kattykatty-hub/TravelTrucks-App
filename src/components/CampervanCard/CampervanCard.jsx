import React from "react";
import { Link } from "react-router-dom"; // Link to navigate to details
import { useDispatch, useSelector } from "react-redux";
import { CiHeart } from "react-icons/ci"; // Heart icon for favorites
import {
  addToFavorites,
  removeFromFavorites,
} from "../../redux/campersSlice"; // Redux actions for favorites
import { selectFavorites } from "../../redux/selectors"; // Selector for favorites
import VehicleAttributeList from "../VehicleAttributeList/VehicleAttributeList"; // Component to show vehicle attributes
import RatingLocationDetails from "../RatingLocationDetails/RatingLocationDetails"; // Component for rating and location
import VehiclePrice from "../VehiclePrice/VehiclePrice"; // Component for vehicle price
import MainButton from "../MainButton/MainButton"; // Button component
import css from "./CampervanCard.module.css"; // CSS module for styling

const CampervanCard = ({ campervan }) => {
  const { name, id, price, rating, location, description, gallery, reviews } = campervan;

  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites); // Get the favorites from the store

  const isFavorite = favorites.some((fav) => fav.id === id); // Check if this campervan is a favorite

  // Function to toggle the favorite status
  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(id)); // Remove from favorites
    } else {
      dispatch(addToFavorites(campervan)); // Add to favorites
    }
  };

  return (
    <div className={css.vehicleCard}>
      <div className={css.vehicleImageContainer}>
        <img
          className={css.vehicleCardImage}
          src={gallery[0].thumb}
          alt={`${name} image`}
        />
      </div>
      <div className={css.vehicleCardContent}>
        <div className={css.titleContainer}>
          <h2 className={css.vehicleTitle}>{name}</h2>
          <div className={css.priceContainer}>
            <VehiclePrice price={price} />
            <div className={css.heartContainer} onClick={toggleFavorite}>
              {isFavorite ? (
                <CiHeart className={css.heartIconFavorite} />
              ) : (
                <CiHeart className={css.heartIcon} />
              )}
            </div>
          </div>
        </div>
        <RatingLocationDetails
          rating={rating}
          location={location}
          reviews={reviews}
        />
        <p className={css.vehicleDescription}>{description}</p>
        <VehicleAttributeList vehicle={campervan} /> {/* Display attributes */}
        <Link to={`/campers/${id}`} className={css.detailsLink}>
          <MainButton>View Details</MainButton>
        </Link>
      </div>
    </div>
  );
};

export default CampervanCard;
