import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import style from "./Camper.module.css";
import sprite from "../../assets/icons.svg";
import CamperFeatureBadges from "../CamperFeatureBadges/CamperFeatureBadges";
import clsx from "clsx";
import CamperHeaderInfo from "../CamperHeaderInfo/CamperHeaderInfo";
import {
  addFavourite,
  removeFavourite,
  selectIsInside,
} from "../../redux/favouritesSlice";

const Camper = ({ camper }) => {
  const dispatch = useDispatch();
  const isInFavourites = useSelector((state) =>
    selectIsInside(state, camper.id)
  );

  const addToFavourites = () => {
    if (isInFavourites) {
      dispatch(removeFavourite(camper.id));
    } else {
      dispatch(addFavourite(camper.id));
    }
  };

  return (
    <div className={style.camper}>
      <div>
        <img src={camper.gallery[0].thumb} alt={camper.name} />
      </div>
      <div className={style.camperInfo}>
        <div className={style.camperHeader}>
          <div className={style.camperName}>
            <h2 className="font-h2">{camper.name}</h2>
            <CamperHeaderInfo camper={camper} />
          </div>
          <div className={style.camperPrice}>
            <p className="font-h2">€{camper.price}</p>
            <button type="button" onClick={addToFavourites}>
              <svg className="icon">
                <use
                  xlinkHref={`${sprite}#${
                    isInFavourites ? "heart-highlighted" : "heart"
                  }`}
                ></use>
              </svg>
            </button>
          </div>
        </div>
        <p className={style.camperDescription}>{camper.description}</p>
        <CamperFeatureBadges camper={camper} />
        <div>
          <Link
            className={clsx("button", "button-action")}
            to={`/catalog/${camper.id}`}
          >
            Show more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Camper;
