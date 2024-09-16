// import './App.css'
import ContactList from "../ContactList/contactList";
import ContactForm from "../ContactForm/contactForm";
import SearchBox from "../SearchBox/searchBox";

function App() {
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </>
  );
}

export default App;
