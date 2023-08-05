import Navbar from "../src/components/admin/Navbar";
import { Route, Routes } from "react-router-dom";
import SignIn from "../src/pages/admin/SignIn";
import SignUp from "../src/pages/admin/SignUp";
import Home from "../src/pages/admin/Home";
import NotFound from "../src/pages/NotFound";

export default function adminRoutes() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
