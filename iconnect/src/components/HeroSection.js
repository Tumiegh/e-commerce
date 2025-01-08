import React from 'react';
import './HeroSection.css';
import backgroundImage from '../assets/background.jpg';

function HeroSection() {
  return (
    <div className="hero-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <h1>Your Source for Smart Connections</h1>
      <p>Buy. Trade. Repair.</p>
    </div>
  );
}

export default HeroSection;
