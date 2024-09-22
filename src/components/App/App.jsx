// import './App.css'
import ContactList from "../ContactList/contactList";
import ContactForm from "../ContactForm/contactForm";
import SearchBox from "../SearchBox/searchBox";
import { fetchContacts } from "../../redux/contactsOps";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectError, selectLoading } from "../../redux/contactsSlice";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";

function App() {
  const dispatch = useDispatch();
  const loader = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {loader && <Loader />}
      {error && <Error />}
      <ContactList />
      <ToastContainer />
    </>
  );
}

export default App;
