import Contact from "../Contact/contact";
import css from "./contactList.module.css";

export default function contactList({ contacts, onDelete }) {
  return (
    <>
      <ul className={css.list}>
        {contacts.map((item) => (
          <Contact key={item.id} item={item} onDelete={onDelete} />
        ))}
      </ul>
    </>
  );
}
