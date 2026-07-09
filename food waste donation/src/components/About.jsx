import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about" id="about">

      <div className="about-image">
        <img
          src="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=900&q=80"
          alt="Food Donation"
        />
      </div>

      <div className="about-content">

        <span className="about-tag">ABOUT US</span>

        <h2>
          Together We Can End <span>Food Waste</span>
        </h2>

        <p>
          FoodBridge is a platform that connects food donors with NGOs.
          Our mission is to reduce food waste and provide fresh meals
          to people who need them most.
        </p>

        <div className="about-boxes">

          <div className="box">
            <h3>1000+</h3>
            <p>Meals Donated</p>
          </div>

          <div className="box">
            <h3>100+</h3>
            <p>Happy Donors</p>
          </div>

          <div className="box">
            <h3>50+</h3>
            <p>NGO Partners</p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;