import { Field, Form, Formik } from "formik";
import style from "./BookForm.module.css";
import BookFormDatepicker from "../BookFormDatepicker/BookFormDatepicker";
import { useDispatch } from "react-redux";
import { addBooking } from "../../redux/bookingSlice";

const BookForm = ({ camper }) => {
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    email: "",
    bookingDate: null,
    comment: "",
  };

  const handleSubmit = (values) => {
    dispatch(
      addBooking({
        id: camper.id,
        payload: { ...values, date: values.bookingDate.toDateString() },
      })
    );
  };

  return (
    <div className={style.bookForm}>
      <div className={style.bookFormHeader}>
        <h2 className="font-h3">Book your campervan now</h2>
        <p>Stay connected! We are always ready to help you.</p>
      </div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <div className={style.formGroup}>
            <Field id="name" name="name" placeholder="Name*" />
          </div>
          <div className={style.formGroup}>
            <Field id="email" name="email" placeholder="Email*" />
          </div>
          <div className={style.formGroup}>
            <BookFormDatepicker name="bookingDate" />
          </div>
          <div className={style.formGroup}>
            <Field
              as="textarea"
              rows="3"
              id="comment"
              name="comment"
              placeholder="Comment"
            />
          </div>
          <div className={style.formButtonContainer}>
            <button className="button button-action" type="submit">
              Send
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default BookForm;
