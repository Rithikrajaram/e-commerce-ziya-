import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import NearestCenters from './components/NearestCenters'; // Import the NearestCenters component
import Carousel from "./components/Carousel";
import ProductSection from "./components/ProductSection";
import CartPage from "./components/CartPage";
import ConnectWithExperts from "./components/ConnectWithExperts"; // Import the ConnectWithExperts component
import Footer from "./components/Footer"; // Import the Footer component
import "./index.css";

const App = () => {
  const [cart, setCart] = useState([]); // Cart state

  // Function to add a product to the cart
  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.name === product.name);

    if (existingProduct) {
      const updatedCart = cart.map((item) =>
        item.name === product.name ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Function to update the quantity of a product in the cart
  const updateQuantity = (index, newQuantity) => {
    if (newQuantity < 1) return; // Prevent quantity from being less than 1
    const updatedCart = cart.map((item, i) =>
      i === index ? { ...item, quantity: newQuantity } : item
    );
    setCart(updatedCart);
  };

  // Function to remove a product from the cart
  const removeFromCart = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
  };

  return (
    <Router>
      <div>
        <Navbar cart={cart} removeFromCart={removeFromCart} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Carousel />
                <ProductSection addToCart={addToCart} />
                <ConnectWithExperts /> {/* Add ConnectWithExperts after ProductSection */}
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
          {/* Add a new route for NearestCenters */}
          <Route
            path="/location-centers"
            element={<NearestCenters />}
          />
        </Routes>
        <Footer /> {/* Add the Footer component here */}
      </div>
    </Router>
  );
};

export default App;