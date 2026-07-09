import React, { useState } from "react";
import axios from "axios";
import "./DonateFood.css";

function DonateFood() {
  const [formData, setFormData] = useState({
    name: "",
    foodName: "",
    quantity: "",
    address: "",
    date: "",
    time: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/donations",
        formData
      );

      alert("Donation Added Successfully!");

      console.log(res.data);

      setFormData({
        name: "",
        foodName: "",
        quantity: "",
        address: "",
        date: "",
        time: "",
        description: "",
      });
    } catch (error) {
      console.log(error);
      alert("Error while submitting donation");
    }
  };

  return (
    <section className="donate" id="donate">
      <div className="donate-heading">
        <h2>Donate Your Extra Food</h2>
        <p>Your small contribution can bring a smile to someone's face.</p>
      </div>

      <div className="donate-container">
        <div className="donate-info">
          <h3>🍽 Why Donate?</h3>

          <p>✔ Reduce food waste.</p>
          <p>✔ Help hungry people.</p>
          <p>✔ Support trusted NGOs.</p>
          <p>✔ Make your community better.</p>

          <img
            src="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=700&q=80"
            alt="Donate Food"
          />
        </div>

        <form className="donate-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="foodName"
            placeholder="Food Name"
            value={formData.foodName}
            onChange={handleChange}
            required
          />

          <input
            type="number"
            name="quantity"
            placeholder="Quantity (Plates)"
            value={formData.quantity}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="address"
            placeholder="Pickup Address"
            value={formData.address}
            onChange={handleChange}
            required
          />

          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />

          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />

          <textarea
            rows="4"
            name="description"
            placeholder="Additional Information"
            value={formData.description}
            onChange={handleChange}
          ></textarea>

          <button type="submit">
            Donate Now
          </button>
        </form>
      </div>
    </section>
  );
}

export default DonateFood;