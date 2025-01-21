import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import style from "./CamperDetailsPage.module.css";
import CamperDetails from "../../components/CamperDetails/CamperDetails";
import {
  selectCamper,
  selectLoading,
  selectError,
} from "../../redux/campersSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchCamperById } from "../../redux/campersOps";
import CamperFeatures from "../../components/CamperFeatures/CamperFeatures";
import CamperReviews from "../../components/CamperReviews/CamperReviews";
import BookForm from "../../components/BookForm/BookForm";
import clsx from "clsx";
import Container from "../../components/Container/Container";
import { selectBooked } from "../../redux/bookingSlice";
import Loader from "../../components/Loader/Loader";

const CamperDetailsPage = () => {
  const { camperId } = useParams();
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const camper = useSelector(selectCamper);
  const booking = useSelector((state) => selectBooked(state, camperId));

  const [activeTab, setActiveTab] = useState("features");

  useEffect(() => {
    if (!camper) return;
    document.title = camper.name + " - TravelTrucks";
  }, [camper]);

  useEffect(() => {
    dispatch(fetchCamperById(camperId));
  }, [camperId, dispatch]);

  return (
    <Container>
      {!error && loading && <Loader />}
      {error && <p className="error">Error: {error.message}</p>}
      {!loading && !error && camper && (
        <article>
          <CamperDetails camper={camper} />
          <ul className={style.tabsList}>
            <li key="features">
              <button
                type="button"
                className={clsx(
                  style.tabsButton,
                  {
                    [style.tabsButtonActive]: activeTab === "features",
                  },
                  "font-h3"
                )}
                onClick={() => setActiveTab("features")}
              >
                Features
              </button>
            </li>
            <li key="reviews">
              <button
                type="button"
                className={clsx(
                  style.tabsButton,
                  activeTab === "reviews" && style.tabsButtonActive,
                  "font-h3"
                )}
                onClick={() => setActiveTab("reviews")}
              >
                Reviews
              </button>
            </li>
          </ul>
          <div className={style.tabsContent}>
            {activeTab === "features" && <CamperFeatures camper={camper} />}
            {activeTab === "reviews" && <CamperReviews camper={camper} />}
            {booking && (
              <p>You have booked this camper for {booking.payload.date}</p>
            )}
            {!booking && <BookForm camper={camper} />}
          </div>
        </article>
      )}
    </Container>
  );
};

export default CamperDetailsPage;
