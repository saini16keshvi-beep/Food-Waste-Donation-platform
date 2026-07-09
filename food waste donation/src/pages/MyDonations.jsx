import React from "react";
import "./MyDonations.css";

function MyDonations() {

  const donations = [
    {
      food: "Rice & Dal",
      quantity: "25 Plates",
      ngo: "Helping Hands NGO",
      status: "Delivered"
    },
    {
      food: "Vegetable Curry",
      quantity: "15 Plates",
      ngo: "Smile Foundation",
      status: "Pending"
    },
    {
      food: "Bread & Milk",
      quantity: "20 Packets",
      ngo: "Food Care NGO",
      status: "Accepted"
    }
  ];

  return (
    <div className="donation-page">

      <div className="donation-header">
        <h1>🍽 My Donations</h1>
        <p>Track all your food donations here.</p>
      </div>

      <div className="donation-list">

        {donations.map((item, index) => (

          <div className="donation-card" key={index}>

            <h2>{item.food}</h2>

            <p><strong>Quantity:</strong> {item.quantity}</p>

            <p><strong>NGO:</strong> {item.ngo}</p>

            <span className={`status ${item.status.toLowerCase()}`}>
              {item.status}
            </span>

          </div>

        ))}

      </div>

    </div>
  );
}

export default MyDonations;