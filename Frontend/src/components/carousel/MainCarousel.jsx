import React, { useEffect, useState } from "react";
import { ChevronLeft } from "lucide-react";
import { ChevronRight } from "lucide-react";

const images = [
  "/Carousel1.jpg",
  "/Carousel2.jpg",
  "/Carousel3.jpg",
  "/Carousel4.jpg",
  "/Carousel5.jpg",
];

export default function MainCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);

  const nextSlide = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setFade(false);
    }, 300); // Fade duration
  };

  const prevSlide = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + images.length) % images.length
      );
      setFade(false);
    }, 300);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000); // Increase auto-scroll time here
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className={`transition-opacity duration-700 ease-in-out ${
          fade ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="w-full h-[400px] overflow-hidden">
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex}`}
            className="w-full h-full object-fill"
          />
        </div>
      </div>

      {/* Right Button - Always visible */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/20 backdrop-blur-md text-white border border-white/30
 bg-opacity-50 text-white p-2 rounded-full"
      >
        <ChevronRight />
      </button>

      {/* Left Button - Visible after first slide */}
      {currentIndex !== 0 && (
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/20 backdrop-blur-md text-white border border-white/30
 bg-opacity-50 text-white p-2 rounded-full"
        >
          <ChevronLeft />
        </button>
      )}
    </div>
  );
}
