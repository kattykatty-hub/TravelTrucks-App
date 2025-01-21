export const allFilters = {
  location: {
    name: "location",
    label: "Location",
    type: "string",
    icon: "location",
  },
  AC: {
    name: "AC",
    label: "AC",
    type: "bool",
    icon: "ac",
  },
  transmission: {
    name: "transmission",
    label: "Transmission",
    type: "enum",
    icon: "transmission",
    enum: ["manual", "automatic"],
    labels: {
      manual: "Manual",
      automatic: "Automatic",
    },
  },
  kitchen: {
    name: "kitchen",
    label: "Kitchen",
    type: "bool",
    icon: "cup",
  },
  TV: {
    name: "TV",
    label: "TV",
    type: "bool",
    icon: "tv",
  },
  bathroom: {
    name: "bathroom",
    label: "Bathroom",
    type: "bool",
    icon: "water",
  },
  form: {
    name: "form",
    label: "Form",
    type: "enum",
    enum: ["alcove", "fullyIntegrated", "panelTruck"],
    labels: {
      alcove: "Alcove",
      fullyIntegrated: "Fully integrated",
      panelTruck: "Van",
    },
    icons: {
      alcove: "form-alcove",
      fullyIntegrated: "form-integrated",
      panelTruck: "form-van",
    },
  },
  fuel: {
    name: "fuel",
    label: "Fuel",
    type: "enum",
    icon: "petrol",
    enum: ["diesel", "petrol", "electric"],
    labels: {
      diesel: "Diesel",
      petrol: "Petrol",
      electric: "Electric",
    },
  },
  radio: {
    name: "radio",
    label: "Radio",
    type: "bool",
    icon: "radio",
  },
  length: {
    name: "length",
    label: "Length",
    type: "number",
    icon: "length",
  },
  height: {
    name: "height",
    label: "Height",
    type: "number",
    icon: "height",
  },
  width: {
    name: "width",
    label: "Width",
    type: "number",
    icon: "width",
  },
  tank: {
    name: "tank",
    label: "Tank",
    type: "number",
    icon: "tank",
  },
  consumption: {
    name: "consumption",
    label: "Consumption",
    type: "number",
    icon: "consumption",
  },
};

export const equipmentFilters = {
  aircon: {
    name: "AC",
    value: true,
  },
  automatic: {
    name: "transmission",
    value: "automatic",
  },
  kitchen: {
    name: "kitchen",
    value: true,
  },
  tv: {
    name: "TV",
    value: true,
  },
  bathroom: {
    name: "bathroom",
    value: true,
  },
};

export const getEquipmentFilters = () =>
  Object.keys(equipmentFilters).reduce((acc, key) => {
    const filter = allFilters[equipmentFilters[key].name];

    acc[key] = {
      ...equipmentFilters[key],
      label:
        filter.type === "enum"
          ? filter.labels[equipmentFilters[key].value]
          : filter.label,
      icon:
        filter.type === "enum" && filter.icons
          ? filter.icons[equipmentFilters[key].value]
          : filter.icon,
    };

    return acc;
  }, {});

export const resolveFilterParams = (currentFilters) =>
  currentFilters.equipment.reduce((params, key) => {
    if (!equipmentFilters[key]) return params;

    const { name, value } = equipmentFilters[key];
    params[name] = value;
    return params;
  }, {
    ...(currentFilters.location && {
      location: currentFilters.location.split(", ").reverse().join(", "),
    }),
    form: currentFilters.form || undefined,
  });