import React from "react";
import { Link } from "react-router-dom";

export const NavLink = ({ title, clickHandler }) => {
  return (
    <>
      <Link className="navLink" onClick={clickHandler}>
        {title}
      </Link>
    </>
  );
};
