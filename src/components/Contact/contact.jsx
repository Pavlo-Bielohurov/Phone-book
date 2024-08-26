import { FaPhone } from "react-icons/fa6";
import { FaUserLarge } from "react-icons/fa6";
import css from "./contact.module.css";

export default function contact({ item, onDelete }) {
  return (
    <li className={css.container}>
      <div className={css.containerData}>
        <div>
          <FaUserLarge />
          <p>{item.name}</p>
        </div>
        <div>
          <FaPhone />
          <p>{item.number}</p>
        </div>
      </div>
      <button className={css.button} onClick={() => onDelete(item.id)}>
        delet
      </button>
    </li>
  );
}
