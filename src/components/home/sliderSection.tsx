import React, { useState, useEffect } from "react";

const SliderSection = () => {
  const slides = [
    {
      id: 1,
      content: "A game changer in the trading community.",
      subtext: "Stock Market Gazette",
    },
    {
      id: 2,
      content: `${"Empowering traders with valuable insights and resources."}`,
      subtext: "Traders' Journal",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Slides every 5 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative bg-purple-600 from-blue-600 to-blue-500 text-white py-20 z-10">
  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 opacity-75"></div>

      <div className="max-w-4xl mx-auto text-center px-8 h-36 flex flex-col justify-center relative">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            } absolute inset-0 flex items-center justify-center`}
          >
            <div>
              <p className="text-lg font-semibold uppercase tracking-wider">
                {slide.subtext}
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold mt-4">
                {slide.content}
              </h2>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center space-x-2 mt-10">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? "bg-white scale-125"
                : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default SliderSection;
