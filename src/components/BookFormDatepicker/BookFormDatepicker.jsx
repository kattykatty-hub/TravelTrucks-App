import { useField } from "formik";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "./datepicker.css";

const BookFormDatepicker = ({ name = "" }) => {
  const [field, meta, helpers] = useField(name);

  const { value } = meta;
  const { setValue } = helpers;

  const today = new Date();
  const tomorrow = today.setDate(today.getDate() + 1);

  return (
    <DatePicker
      {...field}
      dateFormat="yyyy-MM-dd"
      calendarStartDay={1}
      minDate={tomorrow}
      placeholderText="Booking date*"
      selected={value}
      onChange={(date) => setValue(date)}
    />
  );
};

export default BookFormDatepicker;
