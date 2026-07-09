import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">

      <div className="logo">
        🍽️ Food<span>Bridge</span>
      </div>

      <nav>
        <ul className="nav-links">
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#how">How It Works</a></li>
          <li><a href="#donate">Donate</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <div className="nav-btn">
        <Link to="/dashboard" className="dashboard-btn">
          Dashboard
        </Link>
      </div>

    </header>
  );
}

export default Navbar;