import Navbar from "../src/components/tutor/Navbar";
import { Route, Routes } from "react-router-dom";
import SignIn from "../src/pages/tutor/SignIn";
import SignUp from "../src/pages/tutor/SignUp";
import { Toaster } from "react-hot-toast";
import Home from "../src/pages/tutor/Home";
import NotFound from "../src/pages/NotFound";
import CreateCourse from "../src/pages/tutor/CreateCourse";
import TutorPrivate from "../src/components/authorization/TutorPrivate";

export default function TutorRoutes() {
  return (
    <div>
      <Navbar />
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route element={<TutorPrivate />}>
          <Route path="/courses/create" element={<CreateCourse />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
