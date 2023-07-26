import Navbar from "../src/components/admin/Navbar";
import { Route, Routes } from "react-router-dom";
import SignIn from "../src/pages/admin/SignIn";
import SignUp from "../src/pages/admin/SignUp";

export default function adminRoutes() {
  return (
    <div>
      <Navbar />
      <Routes>
        {/* <Route path="admin" element={<Home />} /> */}
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}
