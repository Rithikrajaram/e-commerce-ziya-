import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import { FaUser, FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.navbarBrand}>ZIYA</div>
      <ul className={styles.navbarNav}>
        <li className={styles.navItem}><a href="#">Ayurvedic Herbs</a></li>
        <li className={styles.navItem}><a href="#">Organic Products</a></li>
        <li className={styles.navItem}><a href="#">Wellness Kits</a></li>
        <li className={styles.navItem}><a href="#">Spring Essentials</a></li>
        <li className={styles.navItem}><a href="#">Community Forum</a></li>
      </ul>
      <div className={styles.navbarIcons}>
        <a href="#" className={styles.iconLink}><FaUser /></a>
        <a href="#" className={styles.iconLink}><FaShoppingCart /></a>
      </div>
    </nav>
  );
};

export default Navbar;