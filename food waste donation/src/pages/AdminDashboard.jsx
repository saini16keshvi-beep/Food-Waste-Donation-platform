import React from "react";
import "./AdminDashboard.css";

function AdminDashboard() {

  const recentDonations = [
    {
      donor: "Rahul Sharma",
      food: "Rice & Dal",
      quantity: "25 Plates",
      status: "Delivered"
    },
    {
      donor: "Priya Verma",
      food: "Bread",
      quantity: "20 Packets",
      status: "Pending"
    },
    {
      donor: "Amit Singh",
      food: "Vegetable Curry",
      quantity: "15 Plates",
      status: "Accepted"
    }
  ];

  return (
    <div className="admin">

      <div className="admin-header">
        <h1>👨‍💼 Admin Dashboard</h1>
        <p>Manage the FoodBridge platform efficiently.</p>
      </div>

      <div className="admin-cards">

        <div className="admin-card">
          <h2>250</h2>
          <p>Total Donations</p>
        </div>

        <div className="admin-card">
          <h2>120</h2>
          <p>Registered Donors</p>
        </div>

        <div className="admin-card">
          <h2>35</h2>
          <p>Registered NGOs</p>
        </div>

        <div className="admin-card">
          <h2>180</h2>
          <p>Meals Delivered</p>
        </div>

      </div>

      <div className="recent-table">

        <h2>Recent Donations</h2>

        <table>

          <thead>
            <tr>
              <th>Donor</th>
              <th>Food</th>
              <th>Quantity</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>

            {recentDonations.map((item, index) => (

              <tr key={index}>

                <td>{item.donor}</td>
                <td>{item.food}</td>
                <td>{item.quantity}</td>
                <td className={item.status.toLowerCase()}>
                  {item.status}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default AdminDashboard;