import { Button, Navbar as NavBar } from "flowbite-react";
import React from "react";
import Logo from "../common/Logo";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  Admin,
  AdminManageTutor,
  AdminManageUser,
  AdminProfile,
  AdminSales,
  AdminSignIn,
  Tutor,
  TutorContact,
  User,
} from "../../api/link";

function Navbar() {
  const { pathname } = useLocation();
  const admin = useSelector((state) => state.admin);
  const normalnav = [
    { name: "Home", href: Admin },
    { name: "Learn", href: User },
    { name: "Teach", href: Tutor },
    { name: "Contact", href: TutorContact },
  ];
  const adminnav = [
    { name: "Home", href: Admin },
    { name: "Manage User", href: AdminManageUser },
    { name: "Manage Tutor", href: AdminManageTutor },
    { name: "sales", href: AdminSales },
    { name: "Profile", href: AdminProfile },
  ];
  const navitems = admin?.loggedIn ? adminnav : normalnav;
  return (
    <NavBar
      style={{ backgroundColor: "rgb(243 244 246)", marginTop: "10px" }}
      fluid={true}
      rounded={true}
    >
      <Logo className="mr-3" to={Admin} size={1.3} admin />
      <div className="flex md:order-2">
        {admin.loggedIn ? (
          ""
        ) : (
          <Link to={AdminSignIn(pathname)}>
            <Button className="bg-green-500 hover:bg-green-300">
              Sign In{" "}
            </Button>
          </Link>
        )}
        <NavBar.Toggle />
      </div>
      <NavBar.Collapse>
        {navitems.map((item) => (
          <Link key={item.name} to={item.href} className="hover:text-green-500">
            <span className={pathname === item.href ? "text-green-600" : null}>
              {item.name}
            </span>
          </Link>
        ))}
      </NavBar.Collapse>
    </NavBar>
  );
}
export default React.memo(Navbar);
