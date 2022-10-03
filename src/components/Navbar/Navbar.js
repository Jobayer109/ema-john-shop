import React from "react";
import logo from "../../images/Logo.svg";
import './Navbar.css';

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-cyan-600 shadow-lg px-24 py-1">
        <div className="flex-1">
          <img src={logo} alt="" />
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0 navbar">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Shop</a>
            </li>

            <li>
              <a href="/">Inventory</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
