import { allFilters } from "../../helpers/filtersHelper";
import sprite from "../../assets/icons.svg";
import style from "./CamperFeatureBadges.module.css";

const CamperFeatureBadges = ({ camper }) => {
  const filterKeys = [
    "transmission",
    "AC",
    "fuel",
    "kitchen",
    "radio",
    "tv",
    "bathroom",
  ];

  const filters = filterKeys
    .filter((key) => camper[key])
    .map((key) => allFilters[key]);

  return (
    <ul className={style.camperFeatureBadges}>
      {filters.map((filter) => (
        <li key={filter.name} className={style.camperFeatureBadge}>
          <svg className="icon">
            <use
              xlinkHref={`${sprite}#${
                filter.type === "enum" && filter.icons
                  ? filter.icons[camper[filter.name]]
                  : filter.icon
              }`}
            />
          </svg>
          <p>
            {filter.type === "enum"
              ? filter.labels[camper[filter.name]]
              : filter.label}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default CamperFeatureBadges;
