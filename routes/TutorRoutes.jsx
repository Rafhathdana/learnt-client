import Navbar from "../src/components/tutor/Navbar";
import { Route, Routes } from "react-router-dom";
import SignIn from "../src/pages/tutor/SignIn";
import SignUp from "../src/pages/tutor/SignUp";

export default function TutorRoutes() {
  return (
    <div>
      <Navbar />
      <Routes>
        {/* <Route path="tutor" element={<Home />} /> */}
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}
