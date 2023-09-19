import { Link } from "react-router-dom";
import { Home } from "../../api/link";

export default function Logo({
  size = 1,
  tutor = false,
  to = Home,
  admin = false,
}) {
  return (
    <>
      <Link to={to}>
        <h1
          className={`${
            tutor
              ? "text-orange-400"
              : admin
              ? "text-green-600"
              : "text-blue-600"
          } px-2 py-1 text-center nexa-font hover:bg-blue-50 ring-1 rounded-full`}
          style={{ fontSize: `${size}rem` }}
        >
          LearnT
        </h1>
      </Link>
    </>
  );
}
