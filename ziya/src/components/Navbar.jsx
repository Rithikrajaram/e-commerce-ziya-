import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Ensure useNavigate is imported
import styles from "./Navbar.module.css";
import { FaUser, FaShoppingCart } from "react-icons/fa";

const Navbar = ({ cart, removeFromCart, isHome }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  // Calculate total amount
  const totalAmount = cart.reduce(
    (total, item) => total + item.discountedPrice * (item.quantity || 1),
    0
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close cart dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(`.${styles.cartDropdown}`) && !event.target.closest(`.${styles.cartButton}`)) {
        setIsCartOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.navbarBrand}>ZIYA</div>
      <ul className={styles.navbarNav}>
        <li className={styles.navItem}><Link to="/">Home</Link></li>
        <li className={styles.navItem}><Link to="/seasonal">Products</Link></li>
        <li className={styles.navItem}><a href="#">Wellness Kits</a></li>
        <li className={styles.navItem}><a href="#">Location Assistant</a></li>
        <li className={styles.navItem}><a href="#">AI Analyzer</a></li>
      </ul>
      
      <div className={styles.navbarIcons}>
        {/* User Icon - Navigate to Login */}
        <span className={styles.iconLink} onClick={() => navigate("/login")} style={{ cursor: "pointer" }}>
          <FaUser />
        </span>

        {/* Cart Icon */}
        <button className={styles.cartButton} onClick={() => setIsCartOpen(!isCartOpen)}>
          <FaShoppingCart />
          {cart.length > 0 && (
            <span className={styles.cartCount}>
              {cart.reduce((total, item) => total + (item.quantity || 1), 0)}
            </span>
          )}
        </button>
      </div>

      {/* Cart Dropdown */}
      {isCartOpen && (
        <div className={styles.cartDropdown}>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <>
              {cart.map((item, index) => (
                <div key={index} className={styles.cartItem}>
                  <img src={item.image} alt={item.name} className={styles.cartItemImage} />
                  <div className={styles.cartItemDetails}>
                    <p>{item.name}</p>
                    <p>${item.discountedPrice} x {item.quantity || 1}</p>
                    <button className={styles.removeButton} onClick={() => removeFromCart(index)}>Remove</button>
                  </div>
                </div>
              ))}
              <div className={styles.cartTotal}><p>Total: ${totalAmount.toFixed(2)}</p></div>
              <div className={styles.cartActions}>
                <button className={styles.viewCartButton} onClick={() => { setIsCartOpen(false); navigate("/cart"); }}>View Cart</button>
                <button className={styles.checkoutButton}>Checkout</button>
              </div>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
