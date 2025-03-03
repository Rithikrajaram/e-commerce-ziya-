import React from "react";
import styles from "./CartPage.module.css";

const CartPage = ({ cart, updateQuantity, removeFromCart }) => {
  // Calculate subtotal
  const subtotal = cart.reduce((total, item) => total + item.discountedPrice * item.quantity, 0);

  // Shipping cost
  const shipping = 15.0;

  // Calculate total
  const total = subtotal + shipping;

  return (
    <div className={styles.cartPage}>
      <h1>Cart</h1>
      <table className={styles.cartTable}>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => (
            <tr key={index}>
              <td className={styles.productCell}>
                <img src={item.image} alt={item.name} className={styles.productImage} />
                <span>{item.name}</span>
              </td>
              <td>${item.discountedPrice.toFixed(2)}</td>
              <td>
                <button
                  className={styles.quantityButton}
                  onClick={() => updateQuantity(index, item.quantity - 1)}
                  disabled={item.quantity === 1}
                >
                  -
                </button>
                <span className={styles.quantity}>{item.quantity}</span>
                <button
                  className={styles.quantityButton}
                  onClick={() => updateQuantity(index, item.quantity + 1)}
                >
                  +
                </button>
              </td>
              <td>${(item.discountedPrice * item.quantity).toFixed(2)}</td>
              <td>
                <button
                  className={styles.removeButton}
                  onClick={() => removeFromCart(index)}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className={styles.cartTotals}>
        <h2>Cart Totals</h2>
        <div className={styles.totalsRow}>
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className={styles.totalsRow}>
          <span>Shipping</span>
          <span>Flat rate: ${shipping.toFixed(2)}</span>
        </div>
        <div className={styles.totalsRow}>
          <span>Shipping to CA.</span>
          <button className={styles.changeAddressButton}>Change address</button>
        </div>
        <div className={styles.totalsRow}>
          <strong>Total</strong>
          <strong>${total.toFixed(2)}</strong>
        </div>
      </div>

      <button className={styles.checkoutButton}>Proceed to Checkout</button>
    </div>
  );
};

export default CartPage;