import Navbar from "../src/components/user/Navbar";
import { Route, Routes } from "react-router-dom";
import SignIn from "../src/pages/user/SignIn";
import SignUp from "../src/pages/user/SignUp";

export default function UserRoutes() {
  return (
    <div>
      <Navbar />
      <Routes>
        {/* <Route path="user" element={<Home />} /> */}
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}
