import Navbar from "../src/components/user/Navbar";
import { Route, Routes } from "react-router-dom";
import SignIn from "../src/pages/user/SignIn";
import SignUp from "../src/pages/user/SignUp";
import { Toaster } from "react-hot-toast";
import NotFound from "../src/pages/NotFound";
import Home from "../src/pages/user/Home";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getSignedInUserAPI } from "../src/api/user";
import { setUser } from "../src/features/userSlice";
import Profile from "../src/pages/user/Profile";

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
        <Route path="profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
