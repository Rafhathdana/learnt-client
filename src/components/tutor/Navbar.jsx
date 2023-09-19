import { Button, Navbar as NavBar } from "flowbite-react";
import React from "react";
import Logo from "../common/Logo";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import MenuDropDown from "./MenuDropDown";
import {
  CreateCourse,
  ManageCourse,
  Tutor,
  TutorContact,
  TutorDashboard,
  TutorProfile,
  TutorSignIn,
  User,
} from "../../api/link";

function Navbar() {
  const { pathname } = useLocation();
  const tutor = useSelector((state) => state.tutor);
  const normalnav = [
    { name: "Home", href: Tutor },
    { name: "Learn", href: User },
    { name: "Contact", href: TutorContact },
  ];
  const tutornav = [
    { name: "Home", href: Tutor },
    { name: "Manage Course", href: ManageCourse },
    { name: "Create Course", href: CreateCourse },
    { name: "Dashboard", href: TutorDashboard },
    { name: "Profile", href: TutorProfile },
  ];
  const navitems = tutor?.loggedIn ? tutornav : normalnav;
  return (
    <NavBar
      style={{ backgroundColor: "rgb(243 244 246)", marginTop: "10px" }}
      fluid={true}
      rounded={true}
    >
      <Logo className="mr-3" to={Tutor} size={1.3} tutor />
      <div className="flex md:order-2">
        {tutor.loggedIn ? (
          <MenuDropDown className="w-3" user={tutor} />
        ) : (
          <Link to={TutorSignIn(pathname)}>
            <Button className="bg-amber-500 hover:bg-amber-300">Sign In</Button>
          </Link>
        )}
        <NavBar.Toggle />
      </div>
      <NavBar.Collapse>
        {navitems.map((item) => (
          <Link key={item.name} to={item.href} className="hover:text-amber-500">
            <span className={pathname === item.href ? "text-amber-600" : null}>
              {item.name}
            </span>
          </Link>
        ))}
      </NavBar.Collapse>
    </NavBar>
  );
}
export default React.memo(Navbar);
