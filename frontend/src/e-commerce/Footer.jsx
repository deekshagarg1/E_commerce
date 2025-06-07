// src/components/Footer.jsx

import React from 'react';
// import './Footer.css'; // Make sure this file is created

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-col">
          <h4>About</h4>
          <ul>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Our Stories</a></li>
            <li><a href="#">Press</a></li>
            <li><a href="#">Corporate Information</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Group Companies</h4>
          <ul>
            <li><a href="#">Myntra</a></li>
            <li><a href="#">Cleartrip</a></li>
            <li><a href="#">Shopsy</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Help</h4>
          <ul>
            <li><a href="#">Payments</a></li>
            <li><a href="#">Shipping</a></li>
            <li><a href="#">Cancellation & Returns</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Consumer Policy</h4>
          <ul>
            <li><a href="#">Cancellation & Returns</a></li>
            <li><a href="#">Terms Of Use</a></li>
            <li><a href="#">Security</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Sitemap</a></li>
            <li><a href="#">Grievance Redressal</a></li>
            <li><a href="#">EPR Compliance</a></li>
          </ul>
        </div>
        <div className="footer-col address">
          <h4>Mail Us:</h4>
          <p>E-commerce Internet Private Limited,<br />
            Buildings Alyssa, Begonia &<br />
            Clove Embassy Tech Village,<br />
            Outer Ring Road, Devarabeesanahalli Village,<br />
            Bengaluru, 560103, Karnataka, India
          </p>

          <h4>Registered Office Address:</h4>
          <p>E-commerce Internet Private Limited,<br />
            Buildings Alyssa, Begonia &<br />
            Clove Embassy Tech Village,<br />
            Outer Ring Road, Devarabeesanahalli Village,<br />
            Bengaluru, 560103, Karnataka, India
          </p>
          <p>CIN : U51109KA22PTC066107</p>
          <p>Telephone: <a href="tel:04-45614700">044-4561700</a> / <a href="tel:044-6741500">044-6715800</a></p>

          <div className="footer-social">
            <a href="#"><i className="bi bi-facebook"></i></a>
            <a href="#"><i className="bi bi-twitter-x"></i></a>
            <a href="#"><i className="bi bi-youtube"></i></a>
            <a href="#"><i className="bi bi-instagram"></i></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-actions">
          <a href="#"><i className="bi bi-shop"></i> Become a Seller</a>
          <a href="#"><i className="bi bi-bullseye"></i> Advertise</a>
          <a href="#"><i className="bi bi-gift"></i> Gift Cards</a>
          <a href="#"><i className="bi bi-question-circle"></i> Help Center</a>
        </div>
        <div className="footer-copy">
          <p>© 2007–2025 E-commerce.com</p>
          <div className="footer-payments">
            <img src="https://i.imgur.com/QI1sMBm.png" alt="payment methods" height="25" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
