// src/pages/Landing.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./../styles/global.css"; // make sure you have some global styles

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      {/* Hero Section */}
      <section className="hero">
        <h1 className="hero-title">🚨 SOS Emergency System</h1>
        <p className="hero-subtitle">
          A secure way to store emergency contacts, medical history, and generate instant SOS QR codes.
        </p>
        <button className="cta-btn" onClick={() => navigate("/signup")}>
          Get Started
        </button>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Why Use SOS Emergency?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>📱 Easy Signup</h3>
            <p>Fill in your details step by step with our wizard-style form.</p>
          </div>
          <div className="feature-card">
            <h3>🩺 Medical Records</h3>
            <p>Keep your health info accessible in case of emergencies.</p>
          </div>
          <div className="feature-card">
            <h3>👨‍👩‍👧‍👦 Emergency Contacts</h3>
            <p>Store multiple emergency contacts for quick response.</p>
          </div>
          <div className="feature-card">
            <h3>🔗 QR Code</h3>
            <p>Generate and share your unique SOS QR instantly.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <h2>Be Prepared, Stay Safe 🚑</h2>
        <button className="cta-btn" onClick={() => navigate("/signup")}>
          Sign Up Now
        </button>
      </section>
    </div>
  );
};

export default Landing;
