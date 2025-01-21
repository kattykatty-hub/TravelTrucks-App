import { useSelector } from "react-redux";
import { selectLocations } from "../../redux/campersSlice";

const LocationSelect = ({ id, locationChanged }) => {
  const locations = useSelector(selectLocations);

  const handleChange = (e) => {
    e.preventDefault();
    locationChanged(e.target.value);
  };

  return (
    <select name="location" id={id} onChange={handleChange}>
      {locations.map((location) => (
        <option key={location.country + location.city} value={location.value}>
          {location.city
            ? `${location.city}, ${location.country}`
            : location.country}
        </option>
      ))}
    </select>
  );
};

export default LocationSelect;
