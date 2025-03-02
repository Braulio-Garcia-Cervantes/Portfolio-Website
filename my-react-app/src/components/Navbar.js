import React from "react";
import { Link } from "react-router-dom";
import '../styles/Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <div className="leftSide">
        {/* Brand or logo name */}
        <span className="brand">Broc Garcia-Cervantes</span>
      </div>

      <div className="rightSide">
        {/* Links to scroll to specific sections */}
        <Link to="#home" className="nav-link">Home</Link>
        <Link to="#about" className="nav-link">About</Link>
        <Link to="#projects" className="nav-link">Projects</Link>
        <Link to="#contact" className="nav-link">Contact</Link>
      </div>
    </div>
  );
}

export default Navbar;
