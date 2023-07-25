import { Button, Navbar as NavBar } from "flowbite-react";
import React from "react";
import Logo from "../common/Logo";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const { pathname } = useLocation();
  let user = false;
  const normalnav = [
    { name: "Home", href: "/user" },
    { name: "Explore", href: "/explore" },
    { name: "Teach", href: "/teach" },
    { name: "Contact", href: "/contact" },
  ];
  const usernav = [
    { name: "Home", href: "/user" },
    { name: "Explore", href: "/explore" },
    { name: "Enrolled", href: "/enrolled" },
    { name: "Profile", href: "/profile" },
  ];
  let navitems = user?.loggedIn ? usernav : normalnav;
  return (
    <NavBar
      style={{ backgroundColor: "rgb(243 244 246)", marginTop: "10px" }}
      fluid={true}
      rounded={true}
    >
      <Logo className="mr-3" to={"/user"} />
      <div className="flex md:order-2">
        <Button>
          <Link to={`signin?from=${pathname}`}>Sign In</Link>
        </Button>
        {/* <NavBar.Toggle /> */}
      </div>
      <NavBar.Collapse>
        {navitems.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            className="hover:text-indigo-500"
          >
            <span className={pathname === item.href ? "text-indigo-600" : null}>
              {item.name}
            </span>
          </Link>
        ))}
      </NavBar.Collapse>
    </NavBar>
  );
}
export default React.memo(Navbar);
