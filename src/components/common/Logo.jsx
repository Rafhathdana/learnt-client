import { Link } from "react-router-dom";

export default function Logo({ size = 1, to = "/" }) {
  return (
    <>
      <Link to={to}>
        <h1
          className="px-2 text-center nexa-font hover:bg-blue-50 ring-1 rounded-full"
          style={{ fontSize: `${size}rem` }}
        >
          LearnT
        </h1>
      </Link>
    </>
  );
}
