import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import styles from "./SeasonalSavings.module.css";
import ss from "../assets/images/ss.jpeg";
import ss1 from "../assets/images/ss1.jpeg";
import ss2 from "../assets/images/ss2.jpeg";
import ss3 from "../assets/images/ss3.jpeg";
import ss4 from "../assets/images/ss4.jpeg";
import ss5 from "../assets/images/ss5.jpeg";
import ss6 from "../assets/images/ss6.jpeg";
import ss7 from "../assets/images/ss7.jpeg";
import ss8 from "../assets/images/ss8.jpeg";
import ss9 from "../assets/images/ss9.jpeg";
import ss10 from "../assets/images/ss10.jpeg";
import ss11 from "../assets/images/ss11.jpeg";
import image11 from "../assets/images/image11.jpeg";
import ss12 from "../assets/images/ss12.png";
import ss13 from "../assets/images/ss13.webp";
import ss14 from "../assets/images/ss14.jpeg";
import ss15 from "../assets/images/ss15.jpeg";
import ss16 from "../assets/images/ss16.jpeg";
import ss17 from "../assets/images/ss17.jpeg";
import ss18 from "../assets/images/ss18.jpeg";

const products = [
  { id: 1, name: "Chyawanprash", image: ss, price: 14.99, category: "Health Supplements" },
  { id: 2, name: "Ashwagandha Capsules", image: ss1, price: 10.99, category: "Health Supplements" },
  { id: 3, name: "Triphala Powder", image: ss2, price: 13.99, category: "Health Supplements" },
  { id: 4, name: "Brahmi Tablet", image: ss3, price: 9.99, category: "Herbal Tablets & Powders" },
  { id: 5, name: "Amla Juice", image: ss4, price: 9.99, category: "Herbal Tablets & Powders" },
  { id: 6, name: "Moringa Capsules", image: ss5, price: 9.99, category: "Herbal Tablets & Powders" },
  { id: 7, name: "Shilajit Resin", image: ss6, price: 9.99, category: "Essential Oils & Skin Care" },
  { id: 8, name: "Turmeric Latte Mix", image: ss7, price: 9.99, category: "Essential Oils & Skin Care" },
  { id: 9, name: "Tulsi Drops", image: ss8, price: 9.99, category: "Essential Oils & Skin Care" },
  { id: 10, name: "Herbal Hair Oil", image: ss9, price: 9.99, category: "Ayurvedic Remedies" },
  { id: 11, name: "Guggul Tablets", image: ss10, price: 9.99, category: "Ayurvedic Remedies" },
  { id: 12, name: "Aloe Vera Gel", image: ss11, price: 9.99, category: "Ayurvedic Remedies" },
  { id: 13, name: "Ginger Tea", image: image11, price: 9.99, category: "Beverages & Teas" },
  { id: 14, name: "Ayurvedic Toothpaste", image: ss12, price: 9.99, category: "Beverages & Teas" },
  { id: 15, name: "Kumkumadi Oil", image: ss13, price: 9.99, category: "Beverages & Teas" },
  { id: 16, name: "Herbal Face Pack", image: ss14, price: 9.99, category: "Skincare & Beauty" },
  { id: 17, name: "Digestive Churna", image: ss15, price: 9.99, category: "Skincare & Beauty" },
  { id: 18, name: "Joint Pain Balm", image: ss16, price: 9.99, category: "Skincare & Beauty" },
  { id: 19, name: "Ayurvedic Eye Drops", image: ss17, price: 9.99, category: "Specialty Products" },
  { id: 20, name: "Saffron Threads", image: ss18, price: 9.99, category: "Specialty Products" },
];

const ProductPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/cart");
        setCart(response.data.cart);
      } catch (error) {
        console.error("Error fetching cart:", error);
      }
    };
    fetchCart();
  }, []);

  const filteredProducts = products.filter(
    (product) =>
      (!selectedCategory || product.category === selectedCategory) &&
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Featured Products</h2>
      <div className={styles.filterContainer}>
        <input
          type="text"
          placeholder="Search for a product..."
          className={styles.searchInput}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <FaSearch className={styles.searchIcon} />
        <select
          className={styles.dropdown}
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          {[...new Set(products.map((product) => product.category))].map(
            (category) => (
              <option key={category} value={category}>
                {category}
              </option>
            )
          )}
        </select>
      </div>
      <div className={styles.productGrid}>
        {filteredProducts.map((product) => (
          <div key={product.id} className={styles.productCard}>
            <img src={product.image} alt={product.name} className={styles.productImage} />
            <h3 className={styles.productName}>{product.name}</h3>
            <p className={styles.price}>${product.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
