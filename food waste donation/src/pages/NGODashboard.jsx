import React from "react";
import "./NGODashboard.css";

function NGODashboard() {

  const requests = [
    {
      donor: "Rahul Sharma",
      food: "Rice & Dal",
      quantity: "25 Plates",
      location: "Jaipur",
      status: "Pending"
    },
    {
      donor: "Priya Verma",
      food: "Bread & Milk",
      quantity: "20 Packets",
      location: "Ajmer",
      status: "Accepted"
    },
    {
      donor: "Amit Singh",
      food: "Vegetable Curry",
      quantity: "15 Plates",
      location: "Kota",
      status: "Pending"
    }
  ];

  return (
    <div className="ngo-dashboard">

      <div className="ngo-header">
        <h1>🏢 NGO Dashboard</h1>
        <p>Manage and accept food donation requests.</p>
      </div>

      <div className="request-list">

        {requests.map((item, index) => (

          <div className="request-card" key={index}>

            <h2>{item.food}</h2>

            <p><strong>Donor:</strong> {item.donor}</p>

            <p><strong>Quantity:</strong> {item.quantity}</p>

            <p><strong>Location:</strong> {item.location}</p>

            <span className={`status ${item.status.toLowerCase()}`}>
              {item.status}
            </span>

            <div className="buttons">
              <button className="accept">Accept</button>
              <button className="reject">Reject</button>
            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default NGODashboard;