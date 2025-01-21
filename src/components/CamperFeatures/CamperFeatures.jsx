import { allFilters } from "../../helpers/filtersHelper";
import CamperFeatureBadges from "../CamperFeatureBadges/CamperFeatureBadges";
import style from "./CamperFeatures.module.css";

const CamperFeatures = ({ camper }) => {
  if (!camper) {
    return null;
  }

  const factsList = [
    "form",
    "length",
    "height",
    "width",
    "tank",
    "consumption",
  ];

  const facts = factsList
    .map((key) => {
      const filter = allFilters[key];

      if (!filter) return null;

      return {
        name: key,
        label: filter.label,
        value:
          filter.type === "enum" ? filter.labels[camper[key]] : camper[key],
      };
    })
    .filter((fact) => !!fact);

  return (
    <div className={style.camperFeatures}>
      <CamperFeatureBadges camper={camper} />
      <div className={style.vehicleDetails}>
        <h3 className="font-h3">Vehicle details</h3>
        <table>
          <tbody>
            {facts.map((fact) => (
              <tr key={fact.name}>
                <th>{fact.label}</th>
                <td>{fact.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CamperFeatures;
