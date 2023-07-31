import { Link } from "react-router-dom";

export default function Logo({ size = 1, tutor = false, to = "/" }) {
  return (
    <>
      <Link to={to}>
        <h1
          className={`${
            tutor ? "text-orange-400" : "text-blue-600"
          } px-2 py-1 text-center nexa-font hover:bg-blue-50 ring-1 rounded-full`}
          style={{ fontSize: `${size}rem` }}
        >
          LearnT
        </h1>
      </Link>
    </>
  );
}
