import { Route, Routes } from "react-router-dom";
import SignIn from "../pages/admin/SignIn";
import SignUp from "../pages/admin/SignUp";
import Home from "../pages/admin/Home";
import NotFound from "../pages/NotFound";
import ManageUsers from "../pages/admin/ManageUsers";
import ManageTutors from "../pages/admin/ManageTutors";
import ManageCategory from "../pages/admin/ManageCategory";

export default function adminRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="/users" element={<ManageUsers />} />
        <Route path="/tutors" element={<ManageTutors />} />
        <Route path="/category" element={<ManageCategory />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
