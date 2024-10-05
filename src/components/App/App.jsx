import "./App.css";
import { lazy, Suspense } from "react";
import "react-toastify/dist/ReactToastify.css";
import Layout from "../Loyout/Layout";
import { Route, Routes } from "react-router-dom";

const Homepage = lazy(() => import("../../pages/HomePage/HomePage"));
const RegisterPage = lazy(() =>
  import("../../pages/RegisterPage/RegisterPage")
);
const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() =>
  import("../../pages/ContactsPage/ContactsPage")
);

function App() {
  return (
    <Layout>
      <Suspense fallback={"Loading...."}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
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
