import { Button, Navbar as NavBar } from "flowbite-react";
import React from "react";
import Logo from "../common/Logo";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const { pathname } = useLocation();
  const admin = useSelector((state) => state.admin);
  const normalnav = [
    { name: "Home", href: "/admin" },
    { name: "Learn", href: "/user" },
    { name: "Teach", href: "/tutor" },
    { name: "Contact", href: "/tutor/contact" },
  ];
  const adminnav = [
    { name: "Home", href: "/admin" },
    { name: "Manage User", href: "/user/manage" },
    { name: "Create Tutor", href: "/tutor/manage" },
    { name: "sales", href: "/sales/manage" },
    { name: "Profile", href: "/admin/profile" },
  ];
  const navitems = admin?.loggedIn ? adminnav : normalnav;
  return (
    <NavBar
      style={{ backgroundColor: "rgb(243 244 246)", marginTop: "10px" }}
      fluid={true}
      rounded={true}
    >
      <Logo className="mr-3" to={"/admin"} size={1.3} admin />
      <div className="flex md:order-2">
        {admin.loggedIn ? (
          ""
        ) : (
          <Link to={`signin?from=${pathname}`}>
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
