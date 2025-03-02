import React from "react";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import ProductSection from "./components/ProductSection";
import "./index.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <Carousel />
      <ProductSection />
      <div style={{ height: "2000px", paddingTop: "60px" }}></div>
    </div>
  );
};

export default App;