import React from 'react';
import '../Style/About.css'; // Import the CSS file for styling

const About = () => {
  return (
    <div id="about-section" className="about-container">
      <div className="image-container">
        <img src="../Images/jose-img.jpg" alt="José Kupeka Muhlanga" />

      </div>
      <div className="text-container">
        <h1>Hi!!</h1>
        <h3>I'm José Kupeka Muhlanga</h3>
        <p>
          I am a Passionate Full Stack developer skilled in the entire Software Development Life
          Cycle. Expertise in diverse programming Languages, software, and system
          architectures. Up-to-date with the latest industry developments. Collaborative team
          player, adept at motivating and supporting colleagues. Strong Communication,
          strategic & logical thinking, and innovative problem-solving abilities to meet
          organisational needs.
        </p>
      </div>
    </div>
  );
}

export default About;
