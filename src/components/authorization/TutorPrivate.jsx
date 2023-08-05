import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

export default function TutorPrivate() {
  const tutor = useSelector((state) => state.tutor);
  return tutor.loggedIn ? (
    <Outlet />
  ) : (
    <Navigate to={"/tutor/signin?private=true"} />
  );
}
