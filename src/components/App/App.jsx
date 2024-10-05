import "./App.css";
import { lazy, Suspense, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import Layout from "../Loyout/Layout";
import Loader from "../Loader/Loader";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "../../redux/auth/operations";
import { selectIsRefreshing } from "../../redux/auth/authSelectrors";
import PrivateRout from "../PrivateRoute/PrivateRout";
import RestrictedRout from "../RestrictedRoute/RestrictedRout";

const Homepage = lazy(() => import("../../pages/HomePage/HomePage"));
const RegisterPage = lazy(() =>
  import("../../pages/RegisterPage/RegisterPage")
);
const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() =>
  import("../../pages/ContactsPage/ContactsPage")
);

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <p>Please wait, updating user info...</p>
  ) : (
    <Layout>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/register"
            element={
              <RestrictedRout component={<RegisterPage />} redirectTo="/" />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRout
                component={<LoginPage />}
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRout component={<ContactsPage />} redirectTo="/login" />
            }
          />
        </Routes>
      </Suspense>
    </Layout>
  );
}
export default App;

// import Loader from "../Loader/Loader";
// import Error from "../Error/Error";
// import { selectError, selectLoading } from "../../redux/contacts/contactsSlice";
// import { ToastContainer } from "react-toastify";
// import ContactList from "../ContactList/contactList";
// import ContactForm from "../ContactForm/contactForm";
// import SearchBox from "../SearchBox/searchBox";
// import { fetchContacts } from "../../redux/contacts/contactsOps";
// import { useDispatch, useSelector } from "react-redux";

// const dispatch = useDispatch();
// const loader = useSelector(selectLoading);
// const error = useSelector(selectError);

// useEffect(() => {
//   dispatch(fetchContacts());
// }, [dispatch]);

// return (
//   <>
//     <h1>Phonebook</h1>
//     <ToastContainer />
//     <ContactForm />
//     <SearchBox />
//     {loader && <Loader />}
//     {error && <Error />}
//     <ContactList />
//   </>
// );
