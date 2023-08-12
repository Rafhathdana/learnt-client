import Navbar from "../src/components/tutor/Navbar";
import { Route, Routes } from "react-router-dom";
import SignIn from "../src/pages/tutor/SignIn";
import SignUp from "../src/pages/tutor/SignUp";
import { Toaster } from "react-hot-toast";
import Home from "../src/pages/tutor/Home";
import NotFound from "../src/pages/NotFound";
import CreateCourse from "../src/pages/tutor/CreateCourse";
import { PrivateTutor } from "../src/components/authorization/PrivateAccess";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getSignedInTutorAPI } from "../src/api/tutor";
import { removeTutor, setTutor } from "../src/features/tutorSlice";

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
