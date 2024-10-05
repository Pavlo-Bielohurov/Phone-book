import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/filters/filtersSlice";
import { selectFilter } from "../../redux/filters/filtersSlice";
import css from "./searchBox.module.css";

export default function SearchBox() {
  const dispatch = useDispatch();
  const value = useSelector(selectFilter);

  const hundleChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className={css.div}>
      <input
        className={css.input}
        type="text"
        value={value}
        onChange={hundleChange}
        placeholder="Find contacts by name"
      />
    </div>
  );
}
