import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import styles from "./ProductSection.module.css";
import image4 from "../assets/images/image4.jpg"; // Correct import
import image5 from "../assets/images/image5.jpg";
import image6 from "../assets/images/image6.jpeg"; // Fixed typo
import image7 from "../assets/images/image7.jpeg";

const ProductSection = () => {
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

  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to move to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  // Auto-scroll every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Adjust the interval as needed
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className={styles.productSection}>
      <h2 className={styles.sectionTitle}>Featured Products</h2>
      <div className={styles.carouselContainer}>
        <div
          className={styles.carouselInner}
          style={{ transform: `translateX(-${currentIndex * 25}%)` }} // Move by 25% for each product
        >
          {products.map((product, index) => (
            <div key={index} className={styles.carouselItem}>
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSection;