/* eslint-disable react/prop-types */
import { FaPhone } from "react-icons/fa6";
import { FaUserLarge } from "react-icons/fa6";
import css from "./contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/contactsOps";

export default function Contact({ item }) {
  const dispatch = useDispatch();

  const handleDelite = () => {
    dispatch(deleteContact(item.id));
  };

  return (
    <li className={css.container}>
      <div className={css.containerData}>
        <div className="">
          <FaUserLarge />
          <p className={css.p}>{item.name}</p>
        </div>
        <div>
          <FaPhone />
          <p className={css.p}>{item.number}</p>
        </div>
      </div>
      <button className={css.button} onClick={handleDelite}>
        Delet
      </button>
    </li>
  );
}
