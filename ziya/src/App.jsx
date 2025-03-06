import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import axios from "axios";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import ProductSection from "./components/ProductSection";
import CartPage from "./components/CartPage";
import ConnectWithExperts from "./components/ConnectWithExperts";
import Footer from "./components/Footer";
import SeasonalSavings from "./components/SeasonalSavings";
import "./index.css";

const AppContent = () => {
  const [cart, setCart] = useState([]);
  const location = useLocation();

  const isHomePage = location.pathname === "/";
  const isOrganicProductsPage = location.pathname === "/organic-products";

  const addToCart = async (product) => {
    try {
      const response = await axios.post("http://localhost:5000/api/cart", product);
      const storedProduct = response.data.product; 
      const existingProduct = cart.find((item) => item.name === storedProduct.name);
      if (existingProduct) {
        const updatedCart = cart.map((item) =>
          item.name === storedProduct.name
            ? { ...item, quantity: item.quantity + storedProduct.quantity }
            : item
        );
        setCart(updatedCart);
      } else {
        setCart([...cart, storedProduct]);
      }
    } catch (error) {
      console.error("Error adding product to cart:", error);
    }
  };

  const updateQuantity = (index, newQuantity) => {
    if (newQuantity < 1) return;
    const updatedCart = cart.map((item, i) =>
      i === index ? { ...item, quantity: newQuantity } : item
    );
    setCart(updatedCart);
  };

  const removeFromCart = async (index) => {
    try {
      const itemToRemove = cart[index];
      if (itemToRemove && itemToRemove._id) {
        await axios.delete(`http://localhost:5000/api/cart/${itemToRemove._id}`);
      }
      const updatedCart = cart.filter((_, i) => i !== index);
      setCart(updatedCart);
    } catch (error) {
      console.error("Error removing product from cart:", error);
    }
  };

  return (
    <>
      <Navbar cart={cart} removeFromCart={removeFromCart} isHome={isHomePage} />
      <div
        className={`page-content ${isOrganicProductsPage ? "organic-page" : ""}`}
        style={{
          backgroundColor: isOrganicProductsPage ? "white" : "inherit",
          color: isOrganicProductsPage ? "black" : "inherit",
        }}
      >
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Carousel />
                <ProductSection addToCart={addToCart} />
                <ConnectWithExperts />
                <ProductSection addToCart={addToCart} /> {/* Added ProductSection again */}
              </>
            }
          />
          <Route
            path="/cart"
            element={
              <CartPage
                cart={cart}
                updateQuantity={updateQuantity}
                removeFromCart={removeFromCart}
              />
            }
          />
          <Route path="/seasonal" element={<SeasonalSavings />} />
          <Route
            path="/organic-products"
            element={
              <>
                <h1>Shop All Organic Products</h1>
                <ProductSection addToCart={addToCart} />
              </>
            }
          />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;
