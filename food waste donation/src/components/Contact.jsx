import React, { useState } from "react";
import "./Contact.css";
import axios from "axios";

function Contact() {

  const url = "http://localhost:5000";

  const [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(`${url}/api/contact`, data);

      if (response.data.success) {
        alert("Message Sent Successfully");

        setData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      }
    } catch (error) {
      alert("Something went wrong");
      console.log(error);
    }
  };

  return (
    <section className="contact" id="contact">

      <div className="contact-title">
        <h2>Get In Touch</h2>
        <p>
          We'd love to hear from you. Contact us for any questions or food donation support.
        </p>
      </div>

      <div className="contact-container">

        <div className="contact-info">

          <div className="info-card">
            <h3>📍 Address</h3>
            <p>Jaipur, Rajasthan, India</p>
          </div>

          <div className="info-card">
            <h3>📞 Phone</h3>
            <p>+91 9876543210</p>
          </div>

          <div className="info-card">
            <h3>📧 Email</h3>
            <p>foodbridge@gmail.com</p>
          </div>

          <div className="info-card">
            <h3>🕒 Working Hours</h3>
            <p>Monday - Saturday</p>
            <p>9:00 AM - 6:00 PM</p>
          </div>

        </div>

        <form className="contact-form" onSubmit={onSubmitHandler}>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={data.name}
            onChange={onChangeHandler}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={data.email}
            onChange={onChangeHandler}
            required
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={data.subject}
            onChange={onChangeHandler}
            required
          />

          <textarea
            rows="5"
            name="message"
            placeholder="Write your message..."
            value={data.message}
            onChange={onChangeHandler}
            required
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;