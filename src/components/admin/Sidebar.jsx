import { useRef } from "react";
import { useLocation } from "react-router-dom";
import Logo from "../common/Logo";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const location = useLocation();
  const { pathname } = location;
  const sidebar = useRef(null);
  return (
    <aside
      ref={sidebar}
      className={`absolute  left-0 top-0 z-9999 flex h-screen w-72.5 flex-coloverflow-y-hidden duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
      style={{ zIndex: "9999", backgroundColor: "rgb(28 36 52)" }}
    >
      <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
        <span className="mt-5">
          <Logo size={1.5} to="/admin" admin />
        </span>
      </div>
    </aside>
  );
};
export default Sidebar;
