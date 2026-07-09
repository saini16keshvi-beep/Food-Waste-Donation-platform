import React from "react";
import "./HowItWorks.css";

function HowItWorks() {
  return (
    <section className="how" id="how">

      <div className="how-title">
        <h2>How It Works</h2>
        <p>Donate food in just 4 simple steps.</p>
      </div>

      <div className="how-container">

        <div className="how-card">
          <div className="number">1</div>
          <h3>Login</h3>
          <p>
            Login to your account and access the FoodBridge platform.
          </p>
        </div>

        <div className="how-card">
          <div className="number">2</div>
          <h3>Donate Food</h3>
          <p>
            Fill in the donation form with food details and pickup location.
          </p>
        </div>

        <div className="how-card">
          <div className="number">3</div>
          <h3>NGO Pickup</h3>
          <p>
            The nearest NGO accepts your request and collects the food.
          </p>
        </div>

        <div className="how-card">
          <div className="number">4</div>
          <h3>Feed People</h3>
          <p>
            Your donation reaches needy people and helps reduce food waste.
          </p>
        </div>

      </div>

    </section>
  );
}

export default HowItWorks;