import React from "react";
import { Link } from "react-router-dom";
const Navbr = () => {
  return (
    <div>
      <nav>
        <div className="logo">
          <Link to="/home">Navbar</Link>
        </div>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbr;
