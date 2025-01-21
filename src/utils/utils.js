export const buildQueryParams = (equipment = [], vehicleType = "", location = "") => {
    const params = new URLSearchParams();
  
    if (equipment.length > 0) {
      params.append("equipment", JSON.stringify(equipment));
    }
  
    if (vehicleType) {
      params.append("vehicleType", vehicleType);
    }
  
    if (location) {
      params.append("location", location);
    }
  
    return params.toString();
  };
  