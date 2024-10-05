import Contact from "../Contact/contact";
import css from "./contactList.module.css";
import { useSelector } from "react-redux";
import { selectVisibileContacts } from "../../redux/contacts/contactsSelectors";

export default function ContactList() {
  const visibleContact = useSelector(selectVisibileContacts);
  return (
    <>
      {visibleContact.length > 0 ? (
        <ul className={css.list}>
          {visibleContact.map((item) => (
            <Contact key={item.id} item={item} />
          ))}
        </ul>
      ) : (
        <p>No contact information available</p>
      )}
    </>
  );
}
