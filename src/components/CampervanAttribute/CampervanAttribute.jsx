import React from "react";
import css from "./CampervanAttribute.module.css"; 

const CampervanAttribute = ({ label, value, icon, iconAltTag }) => {
  return (
    <div className={css.attribute}>
      {icon && (
        <img src={icon} alt={iconAltTag} className={css.icon} />
      )}
      <p className={css.label}>{label}</p>
      {value && <p className={css.value}>{value}</p>}
    </div>
  );
};

export default CampervanAttribute;

