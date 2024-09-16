import Contact from "../Contact/contact";
import css from "./contactList.module.css";
import { useSelector } from "react-redux";
import { contactsSelect } from "../../redux/contactsSlice";
import { filterSelect } from "../../redux/filtersSlice";

export default function contactList() {
  const contacts = useSelector(contactsSelect);
  const filter = useSelector(filterSelect);

  const visibleContact = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
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
