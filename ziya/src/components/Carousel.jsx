import React, { useState, useEffect } from "react";
import CarouselItem from "./CarouselItem";
import styles from "./Carousel.module.css"; 
import image1 from "../assets/images/image1.jpg";
import image2 from "../assets/images/image2.jpg";
import image3 from "../assets/images/image3.jpg";

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const slides = [
      {
        image: image1,
        title: "Connect with Ayurvedic Experts",
        description:
          "Schedule a consultation with our experienced practitioners and receive personalized guidance on your path to holistic wellness. Get expert advice from the comfort of your home.",
        buttonText: "Book Now",
      },
      {
        image: image2,
        title: "Discover Authentic Ayurvedic Wellness",
        description:
          "Explore our range of organic products and expert consultations designed to enhance your well-being naturally. Embrace the ancient wisdom of Ayurveda with ZIYA.",
        buttonText: "Book Now",
      },
      {
        image: image3,
        title: "Find Your Perfect Ayurvedic Match",
        description:
          "Take our personalized dosha quiz to discover the ideal products and practices tailored to your unique needs. Start your journey to balanced health today.",
        buttonText: "Book Now",
      },
    ];
  
    const showSlide = (index) => {
      if (index >= slides.length) {
        setCurrentIndex(0);
      } else if (index < 0) {
        setCurrentIndex(slides.length - 1);
      } else {
        setCurrentIndex(index);
      }
    };
  
    const nextSlide = () => showSlide(currentIndex + 1);
    const prevSlide = () => showSlide(currentIndex - 1);
    const goToSlide = (index) => showSlide(index);
  
    useEffect(() => {
      const interval = setInterval(nextSlide, 5000);
      return () => clearInterval(interval);
    }, [currentIndex]);
  
    return (
      <div className={styles.carousel}>
        <div className={styles.carouselInner}>
          {slides.map((slide, index) => (
            <CarouselItem
              key={index}
              image={slide.image}
              title={slide.title}
              description={slide.description}
              buttonText={slide.buttonText}
              isActive={index === currentIndex}
            />
          ))}
        </div>
        <div className={styles.carouselDots}>
          {slides.map((_, index) => (
            <span
              key={index}
              className={`${styles.dot} ${
                index === currentIndex ? styles.active : ""
              }`}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
        </div>
      </div>
    );
  };
  
  export default Carousel;
  