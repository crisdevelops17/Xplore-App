import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Link className="site-logo" to="/">
        XPLORE
      </Link>
      <nav>
        <NavLink link to="/about">
          About
        </NavLink>
        <NavLink link to="/stays">
          Stays
        </NavLink>
      </nav>
    </header>
  );
}
