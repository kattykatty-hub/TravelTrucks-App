import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCamperDetails,
  selectIsLoading,
  selectError,
} from "../../redux/selectors";
import { fetchCamperDetails } from "../../api/campersOps";
import { useParams, NavLink, Outlet } from "react-router-dom";
import RatingLocationDetails from "../../components/RatingLocationDetails/RatingLocationDetails";
import CampervanPrice from "../../components/CampervanPrice/CampervanPrice";
import BookingForm from "../../components/BookingForm/BookingForm";
import { clsx } from "clsx";
import css from "./CamperDetailsPage.module.css";

const isActiveLink = ({ isActive }) => clsx(css.link, {
  [css.active]: isActive,
});

function CamperDetailsPage() {
  const dispatch = useDispatch();
  const details = useSelector(selectCamperDetails);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchCamperDetails(id));
  }, [dispatch, id]);

  return (
    <div className={css.container}>
      {error && <div className={css.error}>{error}</div>}
      {isLoading && <div className={css.loading}>Loading...</div>}
      {!isLoading && !error && details && (
        <>
          <header>
            <div className={css.container}>
              <nav className={css.containerNavigation}>
                <div className={css.containerNavigationLogo}>
                  <img src="images/Logo.png" alt="LogoTravelTrucks" />
                </div>
                <ul>
                  <li className={`${css.containerNavigationFirstLink} ${css.pageDetails}`}>
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li className={css.containerNavigationSecondLink}>
                    <NavLink to="/catalog">Catalog</NavLink>
                  </li>
                </ul>
              </nav>
            </div>
          </header>

          <main className={css.details}>
            <section className={css.aboutTruck}>
              <div className={css.aboutTruckTitles}>
                <h2 className={css.vehicleTitle}>{details.name}</h2>
                <RatingLocationDetails
                  rating={details.rating}
                  location={details.location}
                  reviews={details.reviews}
                />
                <VehiclePrice price={details.price} />
              </div>
              <ul className={css.vehiclePhotos}>
                {details.gallery.map((photo, index) => (
                  <li key={index} className={css.vehiclePhotoItem}>
                    <img
                      src={photo.thumb}
                      alt="vehicle image"
                      className={css.vehicleImage}
                    />
                  </li>
                ))}
              </ul>
              <p className={css.description}>{details.description}</p>
              <ul className={css.links}>
                <NavLink to="features" className={isActiveLink}>
                  Features
                </NavLink>
                <NavLink to="reviews" className={isActiveLink}>
                  Reviews
                </NavLink>
              </ul>
              <div className={css.bottomSection}>
                <Outlet />
                <BookingForm />
              </div>
            </section>
          </main>
        </>
      )}
    </div>
  );
}

export default CamperDetailsPage;
