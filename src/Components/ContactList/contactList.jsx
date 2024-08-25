import Contact from "../Contact/contact";

export default function contactList({ contacts, onDelete }) {
  return (
    <>
      <ul>
        {contacts.map((item) => (
          <Contact key={item.id} item={item} onDelete={onDelete} />
        ))}
      </ul>
    </>
  );
}
