import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeUser } from "../../features/userSlice";
import { handleLogOutAPI } from "../../api/user";

export default function MenuDropDown() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOut = () => {
    console.log("hai");
    dispatch(removeUser());
    localStorage.removeItem("isAuth");
    handleLogOutAPI().then(({ data }) => {
      navigate("/signin?logout=true");
    });
  };

  return (
    <>
      <button onClick={() => handleLogOut()}>Logout</button>
    </>
  );
}
``;
