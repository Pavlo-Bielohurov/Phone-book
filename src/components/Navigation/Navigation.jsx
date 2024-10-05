import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoading } from "../../redux/auth/authSelectrors";
export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoading);
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      {isLoggedIn && <NavLink to="/contacts"> Contacts </NavLink>}
    </nav>
  );
}
