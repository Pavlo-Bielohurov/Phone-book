import { FaPhone } from "react-icons/fa6";
import { FaUserLarge } from "react-icons/fa6";
import css from "./contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

export default function Contact({ item }) {
  const dispatch = useDispatch();

  const handleDelite = (contact) => {
    dispatch(deleteContact(contact));
  };

  return (
    <li className={css.container}>
      <div className={css.containerData}>
        <div>
          <FaUserLarge />
          <p className={css.p}>{item.name}</p>
        </div>
        <div>
          <FaPhone />
          <p className={css.p}>{item.number}</p>
        </div>
      </div>
      <button className={css.button} onClick={() => handleDelite(item.id)}>
        Delet
      </button>
    </li>
  );
}
