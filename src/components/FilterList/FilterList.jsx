import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleEquipment, setVehicleType } from "../../redux/filtersSlice";
import { selectEquipment, selectVehicleType } from "../../redux/selectors";
import FilterItem from "../FilterItem/FilterItem"; // Import the unified FilterItem
import css from "./FilterList.module.css";

// Icons for equipment and vehicle types
import {
  acIcon,
  automaticIcon,
  kitchenIcon,
  tvIcon,
  bathroomIcon,
  vanIcon,
  fullyIntegratedIcon,
  alcoveIcon,
} from "../../assets/icons/icons";

const FilterList = ({ title }) => {
  const dispatch = useDispatch();
  const equipment = useSelector(selectEquipment);
  const vehicleType = useSelector(selectVehicleType);

  // Handlers for equipment and vehicle type clicks
  const handleEquipmentClick = (label) => {
    dispatch(toggleEquipment(label));
  };

  const handleVehicleTypeClick = (label) => {
    dispatch(setVehicleType(label));
  };

  // Equipment and vehicle type mappings
  const equipmentMap = [
    { icon: acIcon, label: "AC" },
    { icon: automaticIcon, label: "Automatic" },
    { icon: kitchenIcon, label: "Kitchen" },
    { icon: tvIcon, label: "TV" },
    { icon: bathroomIcon, label: "Bathroom" },
  ];

  const vehicleTypeMap = [
    { icon: vanIcon, label: "Panel Truck" },
    { icon: fullyIntegratedIcon, label: "Fully Integrated" },
    { icon: alcoveIcon, label: "Alcove" },
  ];

  // Render based on title to determine which options to show
  return (
    <div className={css.vehicleFilters}>
      <h2 className={css.vehicleFiltersTitle}>{title}</h2>
      <ul className={css.vehicleFiltersList}>
        {title === "Vehicle equipment" &&
          equipmentMap.map((item) => (
            <FilterItem
              key={item.label}
              icon={item.icon}
              label={item.label}
              iconAltTag={item.label}
              isActive={equipment.includes(item.label)}
              onClick={() => handleEquipmentClick(item.label)}
            />
          ))}
        {title === "Vehicle type" &&
          vehicleTypeMap.map((item) => (
            <FilterItem
              key={item.label}
              icon={item.icon}
              label={item.label}
              iconAltTag={item.label}
              isActive={vehicleType === item.label}
              onClick={() => handleVehicleTypeClick(item.label)}
            />
          ))}
      </ul>
    </div>
  );
};

export default FilterList;

