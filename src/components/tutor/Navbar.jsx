import { Button, Navbar as NavBar } from "flowbite-react";
import React from "react";
import Logo from "../common/Logo";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const { pathname } = useLocation();
  let user = false;
  const normalnav = [
    { name: "Home", href: "/tutor" },
    { name: "Learn", href: "/user" },
    { name: "About", href: "/tutor/about" },
    { name: "Contact", href: "/tutor/contact" },
  ];
  const usernav = [
    { name: "Home", href: "/tutor" },
    { name: "Manage Course", href: "/tutor/manage" },
    { name: "Create Course", href: "/tutor/enrolled" },
    { name: "Profile", href: "/tutor/profile" },
  ];
  let navitems = user?.loggedIn ? usernav : normalnav;
  return (
    <NavBar
      style={{ backgroundColor: "rgb(243 244 246)", marginTop: "10px" }}
      fluid={true}
      rounded={true}
    >
      <Logo className="mr-3" to={"/tutor"} size={1.3} tutor />
      <div className="flex md:order-2">
        <Button>
          <Link to={`signin?from=${pathname}`}>Sign In</Link>
        </Button>
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
