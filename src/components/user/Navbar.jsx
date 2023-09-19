import { Button, Navbar as NavBar } from "flowbite-react";
import React from "react";
import Logo from "../common/Logo";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import MenuDropDown from "../user/MenuDropDown";
import {
  Contact,
  Enrolled,
  Explore,
  Profile,
  Tutor,
  User,
  UserSignIn,
} from "../../api/link";
function Navbar() {
  const { pathname } = useLocation();
  const user = useSelector((state) => state.user);
  const NormalNav = [
    { name: "Home", href: User },
    { name: "Explore", href: Explore },
    { name: "Teach", href: Tutor },
    { name: "Contact", href: Contact },
  ];

  const UserNav = [
    { name: "Home", href: User },
    { name: "Explore", href: Explore },
    { name: "Enrolled", href: Enrolled },
    { name: "Profile", href: Profile },
  ];
  const navitems = user?.loggedIn ? UserNav : NormalNav;
  return (
    <NavBar
      style={{ backgroundColor: "rgb(243 244 246)", marginTop: "10px" }}
      fluid={true}
      rounded={true}
    >
      <Logo className="mr-3" to={User} size={1.3} />
      <div className="flex md:order-2">
        {user.loggedIn ? (
          <MenuDropDown className="w-3" user={user} />
        ) : (
          <Link to={UserSignIn(pathname)}>
            <Button>Sign In </Button>
          </Link>
        )}
        <NavBar.Toggle />
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
