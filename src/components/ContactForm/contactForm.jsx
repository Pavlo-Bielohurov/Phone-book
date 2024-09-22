import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";
import * as Yup from "yup";
import css from "./contactForm.module.css";
import { toast, Bounce } from "react-toastify";

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

export default function ContactForm() {
  const dispatch = useDispatch();

  const handleSubmit = (value, actions) => {
    if (!value.username || !value.usernumber) {
      toast.warn("Please fill out all fields!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
    } else {
      dispatch(
        addContact({
          name: value.username,
          number: value.usernumber,
        })
      );
      toast.success("🎉 Contact added successfully!", {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
      actions.resetForm();
    }
  };
  return (
    <>
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
      {/* <ToastContainer /> */}
    </>
  );
}
