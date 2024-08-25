import { Formik, Form, Field, ErrorMessage } from "formik";
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
export default function contactForm({ onAdd }) {
  const handleSubmit = (value, acttions) => {
    onAdd({
      name: value.username,
      number: value.usernumber,
    });
    acttions.resetForm();
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
