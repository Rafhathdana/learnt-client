import Navbar from "../components/user/Navbar";
import { Route, Routes } from "react-router-dom";
import SignIn from "../pages/user/SignIn";
import SignUp from "../pages/user/SignUp";
import { Toaster } from "react-hot-toast";
import NotFound from "../pages/NotFound";
import Home from "../pages/user/Home";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getSignedInUserAPI } from "../api/user";
import { setUser } from "../features/userSlice";
import Profile from "../pages/user/Profile";
import Explore from "../pages/user/Explore";
import Course from "../pages/user/Course";
import { PrivateUser } from "../components/authorization/PrivateAccess";

export default function UserRoutes() {
  const dispatch = useDispatch();
  useEffect(() => {
    getSignedInUserAPI()
      .then((response) => {
        let userData = response.data?.userData || null;
        if (!userData) {
          console.log("user not logged in");
          localStorage.removeItem("isAuth");
          return;
        }
        dispatch(
          setUser({
            ...response.data?.userData,
            userId: response.data.userData._id,
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
        <Route path="user" element={<Home />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        {/* <Route path="profile" element={<Profile />} /> */}
        <Route path="explore" element={<Explore />} />
        <Route path="course/:id" element={<Course />} />
        <Route element={<PrivateUser />}>
          <Route path="user/profile" element={<Profile />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
