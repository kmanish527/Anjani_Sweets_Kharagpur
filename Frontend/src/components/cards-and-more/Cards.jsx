import React, { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const products = [
  { id: 1, name: "Product 1", price: 100, discountPrice: 80, image: "/p1.jpg" },
  { id: 2, name: "Product 2", price: 120, discountPrice: 90, image: "/p1.jpg" },
  { id: 3, name: "Product 3", price: 150, discountPrice: 100, image: "/p1.jpg" },
  { id: 4, name: "Product 4", price: 130, discountPrice: 95, image: "/p1.jpg" },
  { id: 5, name: "Product 5", price: 160, discountPrice: 110, image: "/p1.jpg" },
  { id: 6, name: "Product 6", price: 140, discountPrice: 85, image: "/p1.jpg" },
];

export default function Cards() {
  const [quantities, setQuantities] = useState({});
  const scrollRef = useRef(null);

  const handleAddToCart = (id) => {
    setQuantities((prev) => ({ ...prev, [id]: 1 }));
  };

  const increment = (id) => {
    setQuantities((prev) => ({ ...prev, [id]: prev[id] + 1 }));
  };

  const decrement = (id) => {
    if (quantities[id] === 1) {
      const updated = { ...quantities };
      delete updated[id];
      setQuantities(updated);
    } else {
      setQuantities((prev) => ({ ...prev, [id]: prev[id] - 1 }));
    }
  };

  const scroll = (direction) => {
    const container = scrollRef.current;
    const cardWidth = container.querySelector(".card")?.offsetWidth || 300;
    container.scrollBy({ left: direction === "left" ? -cardWidth : cardWidth, behavior: "smooth" });
  };

  return (
    <div className="relative p-4">
      <h1 className="text-center text-3xl font-bold mb-4 text-white">Our Products</h1>

      {/* Scroll Buttons */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white/20 hover:bg-white/40 text-white rounded-full backdrop-blur"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={() => scroll("right")}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white/20 hover:bg-white/40 text-white rounded-full backdrop-blur"
      >
        <ChevronRight size={24} />
      </button>

      {/* Scrollable Container */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-4 no-scrollbar scroll-smooth"
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="card flex-none w-72 rounded-xl overflow-hidden shadow-md bg-white/20 backdrop-blur-md text-white border border-white/30"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 min-h-[160px] flex flex-col justify-between">
              <div>
                <h2 className="text-lg font-semibold text-center">{product.name}</h2>
                <p className="text-gray-300 line-through">₹{product.price}</p>
                <p className="text-green-300 font-bold mb-2">₹{product.discountPrice}</p>
              </div>
              {quantities[product.id] ? (
                <div className="flex items-center justify-center gap-3 mt-2">
                  <button
                    className="px-3 py-1 m-1 bg-[#602020] hover:bg-[#3b1010] rounded"
                    onClick={() => decrement(product.id)}
                  >-</button>
                  <span className="font-semibold">{quantities[product.id]}</span>
                  <button
                    className="px-3 py-1 m-1 bg-[#602020] hover:bg-[#3b1010] rounded"
                    onClick={() => increment(product.id)}
                  >+</button>
                </div>
              ) : (
                <div className="flex justify-center mt-2">
                  <button
                    className="bg-[#602020] text-white px-4 py-2 rounded hover:bg-[#3b1010] transition"
                    onClick={() => handleAddToCart(product.id)}
                  >
                    Add to Cart
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
