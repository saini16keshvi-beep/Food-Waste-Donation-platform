import React from "react";
import "./Notifications.css";

function Notifications() {

  const notifications = [
    {
      title: "Donation Accepted",
      message: "Helping Hands NGO has accepted your food donation.",
      time: "10 Minutes Ago"
    },
    {
      title: "Pickup Completed",
      message: "Your donated food has been successfully collected.",
      time: "1 Hour Ago"
    },
    {
      title: "Food Delivered",
      message: "Your donation has reached needy people. Thank you ❤️",
      time: "Yesterday"
    },
    {
      title: "Welcome",
      message: "Welcome to FoodBridge. Start donating today!",
      time: "2 Days Ago"
    }
  ];

  return (
    <div className="notifications">

      <div className="notification-header">
        <h1>Notifications 🔔</h1>
        <p>Stay updated with your latest donation activities.</p>
      </div>

      <div className="notification-list">

        {notifications.map((item, index) => (

          <div className="notification-card" key={index}>

            <div className="icon">🔔</div>

            <div className="content">
              <h3>{item.title}</h3>
              <p>{item.message}</p>
              <span>{item.time}</span>
            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Notifications;