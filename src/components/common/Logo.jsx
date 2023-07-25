import React from "react";
import { Link } from "react-router-dom";

export default function Logo({ to = "/" }) {
  return (
    <>
      <Link to={to}>
        <h1 className="px-2 text-center nexa-font hover:bg-blue-50">LearnT</h1>
      </Link>
    </>
  );
}
