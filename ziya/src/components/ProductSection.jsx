import React from "react";
import ProductCard from "./ProductCard";
import styles from "./ProductSection.module.css";
import image4 from "../assets/images/image4.jpg"; // Use image4
import image5 from "../assets/images/image5.jpg"; // Use image5
import image6 from "../assets/images/image6.jpeg"; // Use image6
import image7 from "../assets/images/image7.jpeg"; // Use image7

const ProductSection = ({ addToCart }) => {
  const products = [
    {
      image: image4, // Use image4
      name: "Turmeric Root",
      originalPrice: 12.49,
      discountedPrice: 9.37,
      onSale: true,
    },
    {
      image: image5, // Use image5
      name: "Tulsi Leaves",
      originalPrice: 15.99,
      discountedPrice: 11.99,
      onSale: true,
    },
    {
      image: image6, // Use image6
      name: "Ashwagandha Powder",
      originalPrice: 14.99,
      discountedPrice: 14.99,
      onSale: false,
    },
    {
      image: image7, // Use image7
      name: "Brahmi Powder",
      originalPrice: 10.99,
      discountedPrice: 10.99,
      onSale: false,
    },
  ];

  return (
    <div className={styles.productSection}>
      <h2 className={styles.sectionTitle}>Featured Products</h2>
      <div className={styles.productGrid}>
        {products.map((product, index) => (
          <ProductCard key={index} {...product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default ProductSection;