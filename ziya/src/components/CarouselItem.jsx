import React from "react";
import styles from "./Carousel.module.css"; 

const CarouselItem = ({ image, title, description, buttonText, isActive }) => {
  return (
    <div className={`${styles.carouselItem} ${isActive ? styles.active : ""}`}>
      <img src={image} alt={title} />
      <div className={styles.carouselContent}>
        <h2>{title}</h2>
        <p>{description}</p>
        <button>{buttonText}</button>
      </div>
    </div>
  );
};

export default CarouselItem;