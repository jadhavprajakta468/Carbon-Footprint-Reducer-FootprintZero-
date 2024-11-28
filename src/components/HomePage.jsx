// HomePage.js
import React from "react";
import './HomePage.css';
import sustainability from './images/White Minimalist Profile LinkedIn Banner1.png';
import cfoot from './images/carbon-footprint.png';
import linkedin from './images/linkdin.png';
import instagram from './images/Instagram-Logo-PNG-2018.webp';

const HomePage = () => {
  return (
    <div>
      <section className="intro-image">
        <img src={sustainability} alt="Sustainability" className="intro-pic" />
      </section>

      <main>
      <section className="hero" id="About" style={{ backgroundColor: 'var(--beige)' }}>
          <div className="content">
            <h1>Take Action, Reduce Your Footprint</h1>
            <h2>About Us</h2>
            <p>
              🌍 Welcome to FootprintZero! We're on a mission to help you reduce your carbon footprint and build a greener, sustainable world. 🌱
              Together, we can make every step count! 💚
              Join our community and let's create a brighter future with small, powerful changes. 🌟 Let's go Zero! 🌿
            </p>
            <p>Join thousands in making a difference. Every step counts toward a sustainable future! 🌍👣💚🌱✨</p>
            <div className="buttons">
              <a href="/campaigns" className="btn-primary">Get Started</a>
            </div>
          </div>
          <div className="image">
            <img src={cfoot} alt="Sustainability Globe" />
          </div>
        </section>
      </main>

      <section id="contact" className="contact-us">
        <h2>Contact Us</h2>
        <p>If you have any questions or want to get involved, feel free to reach out!</p>
        <p><strong>Founder:</strong> John Doe</p>
        <p><strong>Contact:</strong> +123 456 7890</p>
        <div className="social-links">
          <a href="https://www.instagram.com/yourinstagram" target="_blank" rel="noopener noreferrer" className="social-link">
            <img src={instagram} alt="Instagram" className="social-icon" />
          </a>
          <a href="https://www.linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer" className="social-link">
            <img src={linkedin} alt="LinkedIn" className="social-icon" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
