import React from 'react';
import './home.css';

const HomePage = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Twakula</h1>
          <p>Discover and share your favorite recipes with a vibrant community.</p>
          <a href="/explore" className="cta-button">Explore Recipes</a>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2>Why Twakula?</h2>
        <div className="features">
          <div className="feature">
            <h3>Easy Sharing</h3>
            <p>Share your recipes with friends and the world with just a few clicks.</p>
          </div>
          <div className="feature">
            <h3>Community</h3>
            <p>Connect with food lovers and get inspired by their culinary creations.</p>
          </div>
          <div className="feature">
            <h3>Discover</h3>
            <p>Find new recipes and discover unique dishes from around the globe.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2>What Our Users Say</h2>
        <div className="testimonials">
          <div className="testimonial">
            <p>"Twakula has completely transformed the way I cook. The community is amazing!"</p>
            <h4>Jane Doe</h4>
          </div>
          <div className="testimonial">
            <p>"I've discovered so many incredible recipes. I can't imagine cooking without Twakula."</p>
            <h4>John Smith</h4>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <p>&copy; 2024 Twakula. All rights reserved.</p>
        <p><a href="/contact">Contact Us</a> | <a href="/privacy-policy">Privacy Policy</a></p>
      </footer>
    </div>
  );
};

export default HomePage;
