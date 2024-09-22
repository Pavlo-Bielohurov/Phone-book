import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/filtersSlice";
import { selectFilter } from "../../redux/filtersSlice";

export default function SearchBox() {
  const dispatch = useDispatch();
  const value = useSelector(selectFilter);

  const hundleChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div>
      <p>Find contacts by name</p>
      <input type="text" value={value} onChange={hundleChange} />
    </div>
  );
}
