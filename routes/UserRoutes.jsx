import Navbar from "../src/components/user/Navbar";
import { Route, Routes } from "react-router-dom";
import SignIn from "../src/pages/user/SignIn";
import SignUp from "../src/pages/user/SignUp";
import { Toaster } from "react-hot-toast";
import NotFound from "../src/pages/NotFound";
import Home from "../src/pages/user/Home";

export default function UserRoutes() {
  return (
    <div>
      <Navbar />
      <Toaster />
      <Routes>
        <Route path="user" element={<Home />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
