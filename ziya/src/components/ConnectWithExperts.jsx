import React from 'react';
import styles from './ConnectWithExperts.module.css'; // Import the CSS module
import image8 from "../assets/images/image8.jpg"; // Import the image

const ConnectWithExperts = () => {
  return (
    <div className={styles.connectWithExperts}>
      {/* Left Side: Image */}
      <img src={image8} alt="Overlay" className={styles.imageOverlay} />

      {/* Right Side: Text and Buttons */}
      <div className={styles.content}>
        {/* First Text Section */}
        <h2>Connect with Ayurvedic Experts</h2>
        <p>
          Join our community discussions and expert consultations to deepen your
          understanding of Ayurveda and enhance your wellness journey. Engage with
          knowledgeable practitioners today!
        </p>
        

        {/* Second Text Section */}
       
      </div>
    </div>
  );
};

export default ConnectWithExperts;