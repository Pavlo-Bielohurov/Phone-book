import Contact from "../Contact/contact";
import css from "./contactList.module.css";
import { useSelector } from "react-redux";
import { selectVisibileContacts } from "../../redux/contactsSlice";

export default function ContactList() {
  const visibleContact = useSelector(selectVisibileContacts);

  return (
    <>
      <ul className={css.list}>
        {visibleContact.map((item) => (
          <Contact key={item.id} item={item} />
        ))}
      </ul>
    </>
  );
}
