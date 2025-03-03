import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { FaUser, FaShoppingCart } from "react-icons/fa";

const Navbar = ({ cart, removeFromCart }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Calculate total amount
  const totalAmount = cart.reduce((total, item) => total + item.discountedPrice * item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.navbarBrand}>ZIYA</div>
      <ul className={styles.navbarNav}>
        <li className={styles.navItem}><Link to="/">Home</Link></li>
        <li className={styles.navItem}><a href="#">Organic Products</a></li>
        <li className={styles.navItem}><a href="#">Wellness Kits</a></li>
        <li className={styles.navItem}><a href="#">Spring Essentials</a></li>
        <li className={styles.navItem}><a href="#">Community Forum</a></li>
        <li className={styles.navItem}>
  <Link to="/location-centers">Location Centers</Link>
</li>


      </ul>
      <div className={styles.navbarIcons}>
        <a href="#" className={styles.iconLink}><FaUser /></a>
        <button
          className={styles.cartButton}
          onClick={() => setIsCartOpen(!isCartOpen)}
        >
          <FaShoppingCart />
          {cart.length > 0 && (
            <span className={styles.cartCount}>
              {cart.reduce((total, item) => total + item.quantity, 0)}
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
                    <p>${item.discountedPrice} x {item.quantity}</p>
                    <button
                      className={styles.removeButton}
                      onClick={() => removeFromCart(index)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
              <div className={styles.cartTotal}>
                <p>Total: ${totalAmount.toFixed(2)}</p>
              </div>
              <div className={styles.cartActions}>
                <Link to="/cart" className={styles.viewCartButton}>
                  View Cart
                </Link>
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