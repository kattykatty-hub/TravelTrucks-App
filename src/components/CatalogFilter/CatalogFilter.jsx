import style from "./CatalogFilter.module.css";
import sprite from "../../assets/icons.svg";
import { Field, Form, Formik } from "formik";
import clsx from "clsx";
import { allFilters, getEquipmentFilters } from "../../helpers/filtersHelper";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCurrentFilters,
  setCurrentFilters,
} from "../../redux/filtersSlice";

const CatalogFilter = () => {
  const dispatch = useDispatch();
  const equipmentFilters = getEquipmentFilters();
  const formFilter = allFilters.form;

  const currentFilters = useSelector(selectCurrentFilters);

  if (!currentFilters) return null;

  const initialValues = {
    location: currentFilters.location,
    form: currentFilters.form,
  };

  Object.keys(equipmentFilters).forEach((key) => {
    initialValues[key] =
      currentFilters.equipment && currentFilters.equipment.includes(key);
  });

  const handleSubmit = (values) => {
    const params = {
      location: values.location || "",
      form: values.form || null,
      equipment: Object.keys(equipmentFilters).filter((key) => values[key]),
    };

    dispatch(setCurrentFilters(params));
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ values }) => (
        <Form className={style.catalogFilter}>
          <div className={style.catalogFilterLocation}>
            <label htmlFor="location">{allFilters.location.label}</label>
            <div className={style.catalogFilterLocationInput}>
              <svg className="icon">
                <use xlinkHref={`${sprite}#location`}></use>
              </svg>
              <Field id="location" name="location" placeholder="City" />
            </div>
          </div>
          <div className={style.catalogFilters}>
            <h2>Filters</h2>
            <div className={style.catalogFilterOptions}>
              <h3 className="font-h3">Vehicle equipment</h3>
              <ul className={style.filtersList}>
                {Object.entries(equipmentFilters).map(([name, filter]) => (
                  <li key={name}>
                    <label
                      className={clsx(
                        style.catalogFilterOption,
                        values[name] && style.catalogFilterOptionActive
                      )}
                    >
                      <svg className="icon">
                        <use xlinkHref={`${sprite}#${filter.icon}`} />
                      </svg>
                      <Field type="checkbox" className="hidden" name={name} />
                      <span>{filter.label}</span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>
            <div className={style.catalogFilterOptions}>
              <h3 className="font-h3" id="vehicle-type">
                Vehicle type
              </h3>
              <ul
                className={style.filtersList}
                role="group"
                aria-labelledby="vehicle-type"
              >
                {formFilter.enum.map((value) => (
                  <li key={value}>
                    <label
                      className={clsx(
                        style.catalogFilterOption,
                        values["form"] === value &&
                          style.catalogFilterOptionActive
                      )}
                    >
                      <svg className="icon">
                        <use
                          xlinkHref={`${sprite}#${formFilter.icons[value]}`}
                        />
                      </svg>
                      <Field
                        type="radio"
                        className="hidden"
                        name="form"
                        value={value}
                      />
                      <span>{formFilter.labels[value]}</span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <button type="submit" className="button button-action">
              Search
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default CatalogFilter;
