import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">

      <aside className="sidebar">
        <h2>🍽 FoodBridge</h2>

        <ul>
          <li><Link to="/home">🏠 Home</Link></li>
          <li><Link to="/profile">👤 Profile</Link></li>
          <li><Link to="/mydonations">🍱 My Donations</Link></li>
          <li><Link to="/notifications">🔔 Notifications</Link></li>
          <li><Link to="/">🚪 Logout</Link></li>
        </ul>
      </aside>

      <main className="dashboard-content">

        <div className="welcome">
          <h1>Welcome, Naresh 👋</h1>
          <p>Let's help reduce food waste together.</p>
        </div>

        <div className="cards">

          <div className="card">
            <h2>25</h2>
            <p>Total Donations</p>
          </div>

          <div className="card">
            <h2>18</h2>
            <p>Meals Delivered</p>
          </div>

          <div className="card">
            <h2>5</h2>
            <p>Pending Requests</p>
          </div>

          <div className="card">
            <h2>3</h2>
            <p>NGOs Connected</p>
          </div>

        </div>

        <div className="recent">

          <h2>Recent Activity</h2>

          <table>

            <thead>
              <tr>
                <th>Food</th>
                <th>Quantity</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>Rice & Dal</td>
                <td>25 Plates</td>
                <td className="success">Delivered</td>
              </tr>

              <tr>
                <td>Vegetable Curry</td>
                <td>15 Plates</td>
                <td className="pending">Pending</td>
              </tr>

              <tr>
                <td>Bread</td>
                <td>20 Packets</td>
                <td className="success">Accepted</td>
              </tr>

            </tbody>

          </table>

        </div>

      </main>

    </div>
  );
}

export default Dashboard;