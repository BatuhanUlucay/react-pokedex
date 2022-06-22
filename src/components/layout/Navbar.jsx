import React from "react";
import { Link } from "react-router-dom";
import logo from "./assets/logo.png";
import { FaGithub } from "react-icons/fa";

function Navbar() {
  return (
    <div className="navbar bg-base-300">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          <img src={logo} alt="poke-logo" width="120" />
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <a href="https://github.com/BatuhanUlucay/react-pokedex">
              <FaGithub className="inline text-2xl" /> Github
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
