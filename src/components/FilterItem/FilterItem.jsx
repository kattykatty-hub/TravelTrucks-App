import React from "react";
import css from "./FilterItem.module.css";
import clsx from "clsx"; // For conditional classNames

const FilterItem = ({ 
  label, 
  checked, 
  onChange, 
  icon, 
  iconAltTag, 
  isActive, 
  onClick 
}) => {
  // Handler for checkbox change
  const handleCheckboxChange = (e) => {
    if (onChange) {
      onChange(e); // Call the onChange function if provided
    }
  };

  // Determine if we are rendering as a checkbox or clickable list item
  const isCheckbox = typeof checked !== "undefined"; // Checks if 'checked' is defined

  return (
    <div className={css.filterItem}>
      {isCheckbox ? (
        // Render as checkbox if checked prop is provided
        <div>
          <input
            type="checkbox"
            checked={checked}
            onChange={handleCheckboxChange}
          />
          <label>{label}</label>
        </div>
      ) : (
        // Render as clickable item if not a checkbox
        <li
          className={clsx(css.filterItem, { [css.selected]: isActive })} 
          onClick={onClick} 
          role="button" 
          tabIndex={0} // Make it focusable
          onKeyPress={onClick} // Allow activation via keyboard
        >
          {icon && <img src={icon} alt={iconAltTag} className={css.filterItemIcon} />}
          <p className={css.filterItemLabel}>{label}</p>
        </li>
      )}
    </div>
  );
};

export default FilterItem;

