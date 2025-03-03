import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'; // Import icons
import styles from './Footer.module.css'; // Import the CSS Module

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h3>Explore</h3>
          <ul>
            <li>About ZIYA</li>
            <li>Community</li>
            <li>Subscribe</li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h3>Shop All</h3>
          <ul>
            <li>Our Story</li>
            <li>Community Forum</li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h3>Resources</h3>
          <ul>
            <li>Premium Blends</li>
            <li>Expert Consultations</li>
            <li>Find A Practitioner</li>
            <li>Ayurvedic Herbs</li>
            <li>Wellness Resources</li>
          </ul>
        </div>
      </div>
       
        

      {/* Social Media Icons */}
      <div className={styles.socialIcons}>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook className={styles.icon} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className={styles.icon} />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <FaYoutube className={styles.icon} />
        </a>
      </div>

      <div className={styles.footerBottom}>
        <p>© 2005 ZIYA. All rights reserved.</p>
        <ul>
          <li>Terms and Conditions</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;