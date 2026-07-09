import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="hero">

      <div className="hero-left">

        <span className="hero-tag">
          🌱 Save Food • Save Lives
        </span>

        <h1>
          Reduce Food Waste <br />
          <span>Feed The Hungry</span>
        </h1>

        <p>
          Donate your extra food to trusted NGOs and help
          thousands of people. Together we can build a
          hunger-free society.
        </p>

        <div className="hero-buttons">

          <Link to="/dashboard" className="btn-green">
            Donate Now
          </Link>

          <a href="#about" className="btn-white">
            Learn More
          </a>

        </div>

      </div>

      <div className="hero-right">

        <img
          src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=900&q=80"
          alt="Food Donation"
        />

      </div>

    </section>
  );
}

export default Hero;