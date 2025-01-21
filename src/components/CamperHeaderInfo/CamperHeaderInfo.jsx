import style from "./CamperHeaderInfo.module.css";
import sprite from "../../assets/icons.svg";

const CamperHeaderInfo = ({ camper }) => {
  const location = camper.location.split(",").reverse().join(", ");
  return (
    <div className={style.camperHeaderInfo}>
      <div>
        <svg className="icon">
          <use xlinkHref={`${sprite}#star-highlighted`}></use>
        </svg>
        {camper.rating} ({camper.reviews.length} reviews)
      </div>
      <div>
        <svg className="icon">
          <use xlinkHref={`${sprite}#location`}></use>
        </svg>
        {location}
      </div>
    </div>
  );
};

export default CamperHeaderInfo;
