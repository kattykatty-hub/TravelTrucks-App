import React from "react";
import css from "./CampervanPrice.module.css"; // Importing CSS styles

// The unified CampervanPrice component
const CampervanPrice = ({ price }) => {
  return (
    <h2 className={css.price}>€{price.toFixed(2)}</h2> // Formatting the price to two decimal places
  );
};

export default CampervanPrice; // Exporting the component

