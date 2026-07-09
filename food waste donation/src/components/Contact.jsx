import React from "react";
import "./Contact.css";

function Contact() {
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

        <form className="contact-form">

          <input
            type="text"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            required
          />

          <input
            type="text"
            placeholder="Subject"
            required
          />

          <textarea
            rows="5"
            placeholder="Write your message..."
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