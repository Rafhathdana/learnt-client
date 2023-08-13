import Navbar from "../components/tutor/Navbar";
import { Route, Routes } from "react-router-dom";
import SignIn from "../pages/tutor/SignIn";
import SignUp from "../pages/tutor/SignUp";
import { Toaster } from "react-hot-toast";
import Home from "../pages/tutor/Home";
import NotFound from "../pages/NotFound";
import CreateCourse from "../pages/tutor/CreateCourse";
import { PrivateTutor } from "../components/authorization/PrivateAccess";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getSignedInTutorAPI } from "../api/tutor";
import { removeTutor, setTutor } from "../features/tutorSlice";

export default function TutorRoutes() {
  const dispatch = useDispatch();
  useEffect(() => {
    getSignedInTutorAPI()
      .then((response) => {
        let tutorData = response.data?.tutorData || null;

        if (!tutorData) {
          console.log("user not logged in");
          localStorage.removeItem("isTutorAuth");
          dispatch(removeTutor());
          return;
        }
        dispatch(
          setTutor({
            ...response.data?.tutorData,
            userId: response.data.tutorData._id,
          })
        );
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, []);
  return (
    <div>
      <Navbar />
      <Toaster />
      <Routes>
        <Route element={<PrivateTutor />}>
          <Route path="/courses/create" element={<CreateCourse />} />
        </Route>
        <Route path="/" element={<Home />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
