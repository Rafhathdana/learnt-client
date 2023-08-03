import Navbar from "../src/components/tutor/Navbar";
import { Route, Routes } from "react-router-dom";
import SignIn from "../src/pages/tutor/SignIn";
import SignUp from "../src/pages/tutor/SignUp";
import { Toaster } from "react-hot-toast";
import Home from "../src/pages/tutor/Home";
import NotFound from "../src/pages/NotFound";

export default function TutorRoutes() {
  return (
    <div>
      <Navbar />
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
