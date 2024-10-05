import Loader from "../Loader/Loader";
import Error from "../Error/Error";
import { selectError, selectLoading } from "../../redux/contacts/contactsSlice";
import { ToastContainer } from "react-toastify";
import ContactList from "../ContactList/contactList";
import ContactForm from "../ContactForm/contactForm";
import SearchBox from "../SearchBox/searchBox";
import { fetchContacts } from "../../redux/contacts/contactsOps";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export default function ContactsPage() {
  const dispatch = useDispatch();
  const loader = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1>Phonebook</h1>
      <ToastContainer />
      <ContactForm />
      <SearchBox />
      {loader && <Loader />}
      {error && <Error />}
      <ContactList />
    </>
  );
}
