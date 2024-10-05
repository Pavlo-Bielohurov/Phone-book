import { ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import {
  selectError,
  selectLoading,
} from "../../redux/contacts/contactsSelectors";
import { fetchContacts } from "../../redux/contacts/contactsOps";

import ContactList from "../../components/ContactList/contactList";
import ContactForm from "../../components/ContactForm/contactForm";
import SearchBox from "../../components/SearchBox/searchBox";
import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";

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
