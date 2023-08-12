import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateAdmin = () => {
  const admin = useSelector((state) => state.admin);
  return admin.loggedIn ? (
    <Outlet />
  ) : (
    <Navigate to={"/admin/signin?private=true"} />
  );
};

const PrivateUser = () => {
  const user = useSelector((state) => state.user);
  return user.loggedIn ? <Outlet /> : <Navigate to={"/signin?private=true"} />;
};

const PrivateTutor = () => {
  const tutor = useSelector((state) => state.tutor);
  return tutor.loggedIn ? (
    <Outlet />
  ) : (
    <Navigate to={"/tutor/signin?private=true"} />
  );
};

export { PrivateAdmin, PrivateUser, PrivateTutor };
