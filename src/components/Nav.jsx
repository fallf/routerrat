import { Link } from "react-router";
import React from "react";

function Nav() {
  return (
    <div>
      <Link to="nav" />
      <div>CRYPTO PRICES</div>
      <Link />
      <Link to="/currencies">
        <div>CURRENCIES</div>
      </Link>
    </div>
  );
}

export default Nav;
