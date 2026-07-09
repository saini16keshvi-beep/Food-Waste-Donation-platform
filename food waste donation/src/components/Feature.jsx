import React from "react";
import "./Feature.css";

function Feature() {
  return (
    <section className="features" id="features">

      <div className="section-title">
        <h2>Why Choose FoodBridge?</h2>
        <p>
          We make food donation simple, secure and impactful.
        </p>
      </div>

      <div className="feature-container">

        <div className="feature-card">
          <div className="icon">🍱</div>
          <h3>Easy Food Donation</h3>
          <p>
            Donate extra food in just a few clicks from your home,
            restaurant or event.
          </p>
        </div>

        <div className="feature-card">
          <div className="icon">🏢</div>
          <h3>Verified NGOs</h3>
          <p>
            Your donated food is collected by trusted and verified NGO
            partners.
          </p>
        </div>

        <div className="feature-card">
          <div className="icon">🚚</div>
          <h3>Quick Pickup</h3>
          <p>
            NGOs receive your request and collect the food as quickly as
            possible.
          </p>
        </div>

        <div className="feature-card">
          <div className="icon">❤️</div>
          <h3>Help People</h3>
          <p>
            Every donation helps feed hungry people and reduces food
            waste.
          </p>
        </div>

      </div>

    </section>
  );
}

export default Feature;