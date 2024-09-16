import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import css from "./contactForm.module.css";

const inputSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too long!")
    .required("This field is reguired!"),
  usernumber: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too long!")
    .required("This field is reguired!"),
});
const initialValues = { username: "", usernumber: "" };

export default function contactForm() {
  const dispatch = useDispatch();

  const handleSubmit = (value, actions) => {
    dispatch(
      addContact({
        id: nanoid(),
        name: value.username,
        number: value.usernumber,
      })
    );
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={inputSchema}
    >
      <Form className={css.form}>
        <label className={css.label} htmlFor="username">
          Name
        </label>
        <Field type="text" name="username" id="username" />
        <ErrorMessage
          name="username"
          component="span"
          className={css.errorMessage}
        />
        <label className={css.label} htmlFor="usernumber">
          Number
        </label>
        <Field type="text" name="usernumber" id="usernumber" />
        <ErrorMessage
          name="usernumber"
          component="span"
          className={css.errorMessage}
        />
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
