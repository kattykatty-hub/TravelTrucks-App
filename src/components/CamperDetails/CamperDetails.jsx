import CamperHeaderInfo from "../CamperHeaderInfo/CamperHeaderInfo";
import style from "./CamperDetails.module.css";

const CamperDetails = ({ camper }) => {
  return (
    <div className={style.camperDetails}>
      <div className={style.camperHeader}>
        <h1 className="font-h2">{camper.name}</h1>
        <div className={style.camperInfo}>
          <CamperHeaderInfo camper={camper} />
          <p className="font-h2">€{camper.price}</p>
        </div>
      </div>
      <ul className={style.camperGallery}>
        {camper.gallery.map((image) => (
          <li key={image.thumb}>
            <img src={image.thumb} alt={camper.name} />
          </li>
        ))}
      </ul>
      <p className={style.camperDescription}>{camper.description}</p>
    </div>
  );
};

export default CamperDetails;
