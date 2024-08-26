// import './App.css'
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";

import ContactList from "../ContactList/contactList";
import ContactForm from "../ContactForm/contactForm";
import SearchBox from "../SearchBox/searchBox";
import initialContacts from "../data/contacts.json";

const getInitialContacts = () => {
  const savedContacts = window.localStorage.getItem("contacts");
  return savedContacts !== null ? JSON.parse(savedContacts) : initialContacts;
};

function App() {
  const [contacts, setContacts] = useState(getInitialContacts);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, { ...newContact, id: nanoid() }];
    });
  };

  const deleteContact = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId);
    });
  };

  const filterContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={filter} onSearch={setFilter} />
      <ContactList contacts={filterContacts} onDelete={deleteContact} />
    </>
  );
}

export default App;
