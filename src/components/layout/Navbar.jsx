import React from "react";
import { Link } from "react-router-dom";
import logo from "./assets/logo.png";
import { FaGithub } from "react-icons/fa";

function Navbar() {
  return (
    <div className="navbar bg-base-300">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">
          <img src={logo} alt="poke-logo" width="120" />
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
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
