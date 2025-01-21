import style from "./CamperReviews.module.css";
import sprite from "../../assets/icons.svg";
import clsx from "clsx";

const CamperReviews = ({ camper }) => {
  return (
    <div className={style.camperReviews}>
      {camper.reviews && camper.reviews.length > 0 && (
        <ul>
          {camper.reviews.map((review) => (
            <li key={review.reviewer_name}>
              <div className={style.reviewer}>
                <div className={clsx(style.reviewerInitial, "font-h2")}>
                  {review.reviewer_name[0]}
                </div>
                <div className={style.reviewerInfo}>
                  <h3 className="font-medium">{review.reviewer_name}</h3>
                  <ul className={style.reviewerRating}>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <li key={star}>
                        <svg className="icon">
                          <use
                            xlinkHref={`${sprite}#${
                              star <= review.reviewer_rating
                                ? "star-highlighted"
                                : "star"
                            }`}
                          ></use>
                        </svg>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <p>{review.comment}</p>
            </li>
          ))}
        </ul>
      )}

      {camper.reviews && camper.reviews.length === 0 && <p>No reviews</p>}
    </div>
  );
};

export default CamperReviews;
