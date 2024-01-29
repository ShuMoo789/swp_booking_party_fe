import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-sections">
        <div className="section">
          <h4>Services</h4>
          <ul>
            <li>Top organizations</li>
            <li>Top services</li>
            <li>Top suitable price</li>
          </ul>
        </div>

        <div className="section">
          <h4>Features</h4>
          <ul>
            <li>Login/Register</li>
            <li>Discovery</li>
            <li>Feedback</li>
          </ul>
        </div>

        <div className="section">
          <h4>Support</h4>
          <ul>
            <li>Seller/Policy</li>
            <li>Customer policy</li>
            <li>Contact us</li>
            <li>FAQ's</li>
          </ul>
        </div>

        <div className="cta-section">
          <p>Become our customer to receive the best experience</p>
          <button type="button">Register now!</button>
        </div>

      </div>

      {/* Phần mạng xã hội */}
      <div className="social-media">
        FOLLOW US
        {/* Thêm các biểu tượng mạng xã hội ở đây */}
      </div>

      <p>© 2022 - Copyright of FIVESTARs LLC</p>
    </footer>
  );
};

export default Footer;

/* import React from 'react'

function Footer() {
  return (
    <div>Footer</div>
  )
} */