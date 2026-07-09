import React from "react";
import "./Profile.css";

function Profile() {
  return (
    <div className="profile">

      <div className="profile-card">

        <img
          src="https://i.pravatar.cc/200?img=12"
          alt="Profile"
        />

        <h2>Naresh Saini</h2>
        <p>Food Donor</p>

        <div className="profile-info">

          <div className="info">
            <span>📧 Email</span>
            <h4>naresh@gmail.com</h4>
          </div>

          <div className="info">
            <span>📱 Mobile</span>
            <h4>+91 9876543210</h4>
          </div>

          <div className="info">
            <span>📍 Address</span>
            <h4>Jaipur, Rajasthan</h4>
          </div>

          <div className="info">
            <span>🍱 Total Donations</span>
            <h4>25</h4>
          </div>

        </div>

        <button>Edit Profile</button>

      </div>

    </div>
  );
}

export default Profile;