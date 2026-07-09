import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-box">
          <h2>🍽️ FoodBridge</h2>
          <p>
            Together we can reduce food waste and help hungry people.
            Every meal donated makes a difference.
          </p>
        </div>

        <div className="footer-box">
          <h3>Quick Links</h3>

          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#donate">Donate</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

        </div>

        <div className="footer-box">
          <h3>Contact Us</h3>

          <p>📍 Jaipur, Rajasthan</p>
          <p>📞 +91 9876543210</p>
          <p>📧 foodbridge@gmail.com</p>

        </div>

        <div className="footer-box">
          <h3>Follow Us</h3>

          <div className="social-icons">

            <a href="/">🌐</a>
            <a href="/">📘</a>
            <a href="/">📷</a>
            <a href="/">▶️</a>

          </div>

          <Link to="/" className="login-btn">
            Logout
          </Link>

        </div>

      </div>

      <hr />

      <div className="footer-bottom">
        <p>
          © 2025 FoodBridge | Designed by Naresh Saini | All Rights Reserved.
        </p>
      </div>

    </footer>
  );
}

export default Footer;