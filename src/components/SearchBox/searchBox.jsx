import { useDispatch, useSelector } from "react-redux";
import { setFilter, filterSelect } from "../../redux/filtersSlice";

export default function Search() {
  const dispatch = useDispatch();
  const value = useSelector(filterSelect);

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
