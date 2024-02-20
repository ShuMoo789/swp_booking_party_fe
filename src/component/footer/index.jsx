import './index.scss';
import { Button } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

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
            <li>Q&A</li>
          </ul>
        </div>

        <div className="cta-section">
          <p>Become our customer to receive the best experience</p>
          <button type="button">Register now!</button>
          <div className="social-media">
            FOLLOW US &nbsp;&nbsp;
            <Button variant="primary" href="https://facebook.com">
              <FaFacebook/>
            </Button>
            &nbsp;&nbsp;&nbsp;
            <Button variant="info" href="https://x.com">
              <FaTwitter/>
            </Button>
            &nbsp;&nbsp;&nbsp;
            <Button variant="danger" href="https://instagram.com">
              <FaInstagram/>
            </Button>
            &nbsp;&nbsp;&nbsp;
            <Button variant="warning" href="https://youtube.com">
              <FaYoutube/>
            </Button>
          </div>
        </div>
      </div>

      <p>© 2022 - Copyright of FIVESTARs LLC</p>
    </footer>
  );
};

export default Footer;