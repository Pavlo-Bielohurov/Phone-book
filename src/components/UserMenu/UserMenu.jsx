import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/authSelectrors";

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div>
      <p>Welcome, {user.name}</p>
      <button>Logout</button>
    </div>
  );
}
