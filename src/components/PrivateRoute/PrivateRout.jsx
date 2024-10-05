/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/authSelectrors";
import { Navigate } from "react-router-dom";

export default function PrivateRout({ component, redirectTo }) {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return isLoggedIn ? component : <Navigate to={redirectTo} />;
}
