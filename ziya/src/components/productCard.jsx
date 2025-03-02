import React from "react";
import styles from "./ProductSection.module.css";

const ProductCard = ({ image, name, originalPrice, discountedPrice, onSale }) => {
  return (
    <div className={styles.productCard}>
      {onSale && <span className={styles.saleBadge}>Sale</span>}
      <img src={image} alt={name} className={styles.productImage} />
      <h3 className={styles.productName}>{name}</h3>
      <div className={styles.priceContainer}>
        {onSale && (
          <span className={styles.originalPrice}>${originalPrice}</span>
        )}
        <span className={styles.discountedPrice}>${discountedPrice}</span>
      </div>
      <button className={styles.addToCartButton}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;