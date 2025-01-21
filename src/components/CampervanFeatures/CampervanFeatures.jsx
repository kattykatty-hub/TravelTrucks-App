import React from "react";
import { useSelector } from "react-redux";
import { selectCamperDetails } from "../../redux/selectors"; // Selector for camper details
import CampervanAttribute from "./CampervanAttribute"; // Import the CampervanAttribute component
import css from "./CampervanFeatures.module.css"; // Import styles

const CampervanFeatures = () => {
  const details = useSelector(selectCamperDetails); // Get camper details from Redux

  // Function to format the vehicle form type
  const vehicleFormFormatter = (form) => {
    switch (form) {
      case "fullyIntegrated":
        return "Fully Integrated";
      case "alcove":
        return "Alcove";
      default:
        return form;
    }
  };

  // If details are not loaded yet, you might want to return a loading state or nothing
  if (!details) {
    return <div className={css.loading}>Loading...</div>;
  }

  return (
    <div className={css.container}>
      <h2 className={css.title}>Vehicle Details</h2>
      <hr className={css.underline} />

      <div className={css.attributeContainer}>
        <CampervanAttribute label="Form" value={vehicleFormFormatter(details.form)} />
        <CampervanAttribute label="Length" value={details.length} />
        <CampervanAttribute label="Width" value={details.width} />
        <CampervanAttribute label="Height" value={details.height} />
        <CampervanAttribute label="Tank" value={details.tank} />
        <CampervanAttribute label="Consumption" value={details.consumption} />
      </div>
    </div>
  );
};

export default CampervanFeatures;

