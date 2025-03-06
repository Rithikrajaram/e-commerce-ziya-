import React, { useState } from "react";
import { Carousel } from "primereact/carousel";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import styles from "./ProductSection.module.css"; // Use your existing styles

// Import product images
import image4 from "../assets/images/image4.jpg";
import image5 from "../assets/images/image5.jpg";
import image6 from "../assets/images/image6.jpeg";
import image7 from "../assets/images/image7.jpeg";
import triphalaImage from "../assets/images/image9.jpeg";
import herbalHairOilImage from "../assets/images/image10.jpeg";
import aloeveraGelImage from "../assets/images/image12.jpeg";
import gingerTeaImage from "../assets/images/image11.jpeg";

// Helper function to determine product type
const getProductType = (name) => {
  const lowerName = name.toLowerCase();
  if (lowerName.includes("powder")) return "Powder";
  if (lowerName.includes("oil")) return "Oil";
  if (lowerName.includes("gel")) return "Gel";
  if (lowerName.includes("tea")) return "Tea";
  return "Other";
};

const ProductSection = ({ addToCart }) => {
  const products = [
    { image: image4, name: "Turmeric Root", originalPrice: 12.49, discountedPrice: 9.37, onSale: true },
    { image: image5, name: "Tulsi Leaves", originalPrice: 15.99, discountedPrice: 11.99, onSale: true },
    { image: image6, name: "Ashwagandha Powder", originalPrice: 14.99, discountedPrice: 14.99, onSale: false },
    { image: image7, name: "Brahmi Powder", originalPrice: 10.99, discountedPrice: 10.99, onSale: false },
    { image: triphalaImage, name: "Triphala Powder", originalPrice: 16.99, discountedPrice: 13.99, onSale: true },
    { image: herbalHairOilImage, name: "Herbal Hair Oil", originalPrice: 19.99, discountedPrice: 17.99, onSale: false },
    { image: aloeveraGelImage, name: "Aloevera Gel", originalPrice: 9.99, discountedPrice: 7.99, onSale: true },
    { image: gingerTeaImage, name: "Ginger Tea", originalPrice: 8.99, discountedPrice: 6.99, onSale: false },
  ];

  // Enrich each product with a computed productType
  const productsWithType = products.map((product) => ({
    ...product,
    productType: getProductType(product.name),
  }));

  const [selectedType, setSelectedType] = useState("");

  // Filter products based on type
  const filteredProducts = selectedType
    ? productsWithType.filter((product) => product.productType === selectedType)
    : productsWithType;

  const responsiveOptions = [
    { breakpoint: "1024px", numVisible: 3, numScroll: 1 },
    { breakpoint: "768px", numVisible: 2, numScroll: 2 },
    { breakpoint: "560px", numVisible: 1, numScroll: 1 },
  ];

  // Card Template for Carousel
  const productTemplate = (product) => (
    <div className={styles.productCard}>
      <img src={product.image} alt={product.name} className={styles.productImage} />
      <h2 className={styles.productTitle}>{product.name}</h2>
      <p className={styles.productPrice}>
        <span className={styles.originalPrice}>${product.originalPrice.toFixed(2)}</span>
        <span className={styles.discountPrice}>${product.discountedPrice.toFixed(2)}</span>
      </p>
      <div className={styles.productButtons}>
       
        <button className={styles.addToCart} onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    </div>
  );

  return (
    <div className={styles.carouselContainer}>
      <h2 className={styles.carouselTitle}>Featured Products</h2>

      {/* Product Filter */}
     

      {/* Carousel */}
      <Carousel
        value={filteredProducts}
        numVisible={3}
        numScroll={1}
        responsiveOptions={responsiveOptions}
        className={styles.customCarousel}
        circular
        autoplayInterval={3000}
        itemTemplate={productTemplate}
      />
    </div>
  );
};

export default ProductSection;
