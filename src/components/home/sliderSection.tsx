import React, { useRef, useState, useEffect } from "react";
import quoteImage from "../../assets/images/ed-quot.png";

const SliderSection = () => {
  const testimonials = [
    {
      id: 1,
      content:
        "This guy knows what he's doing! Big Shout out to Saru from Strictly Stocks! He knows his Stocks and Numbers! He helped me with these results in like 10 day's! Come Join the Team!",
    },
    {
      id: 2,
      content:
        "Honest opinion.... It was extremely heartwarming to see that you cared about the class... The way you were trying to educate and the amount you were trying to teach us was above and beyond!",
    },
    {
      id: 3,
      content:
        "I bought my first car 3 weeks ago from making good plays lol",
    },
    {
      id: 4,
      content:
        "Hi Saru! Thank you for a very well-structured class. I greatly appreciate the knowledge you shared! Feeling much more confident trading stocks now. I actually paid off my course within the week the first week making $400+ with just $1500 accounts.",
    },
    {
      id: 5,
      content:
        "Thank you for a very well-articulated and interactive session this morning. I came in with very limited knowledge about stock trading but left feeling very enthusiastic about diversifying my portfolio.",
    },
  ];

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -320, // Scroll width per card
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 320, // Scroll width per card
        behavior: "smooth",
      });
    }
  };

  // Check if we're at the start or end
  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setIsAtStart(scrollLeft === 0);
      setIsAtEnd(scrollLeft + clientWidth === scrollWidth);
    }
  };

  useEffect(() => {
    checkScrollPosition();
    window.addEventListener("resize", checkScrollPosition); // Recheck position on window resize
    return () => {
      window.removeEventListener("resize", checkScrollPosition);
    };
  }, []);

  return (
    <div className="relative mx-auto px-6 bg-gray-50">
      {/* Section Heading */}
      <div className="text-center mb-10 pt-10">
        <p className="text-[#4285F4] text-xl font-thin">Testimonial</p>
        <h4 className="text-4xl font-bold text-gray-800 mt-5">
          Creating A Community Of Life Long Learners.
        </h4>
      </div>

      {/* Horizontal Scrollable Testimonials */}
      <div className="relative">
        <div
          ref={scrollContainerRef}
          className="overflow-x-auto h-[400px]"
          style={{ marginTop: "70px", scrollbarWidth:"none" }}
          onScroll={checkScrollPosition} // Check position on scroll
        >
          <div className="flex ">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white shadow-md mt-7 me-3 ms-4 rounded-lg min-w-[300px] max-w-[300px] flex-shrink-0 border border-gray-200 relative"
              >
                {/* Quote Icon */}
                <div
                  className="ed-testimonial-quote"
                  style={{
                    position: "absolute",
                    top: "-29px",
                    left: "-20px",
                  }}
                >
                  <img decoding="async" src={quoteImage} alt="" />
                </div>
                <p
                  className="text-gray-600 text-start m-4"
                  style={{
                    alignItems: "center",
                    fontWeight: 400,
                    fontSize: "13px",
                    lineHeight: 1.9,
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  {testimonial.content}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Buttons */}
        <button
          onClick={scrollLeft}
          className={`absolute left-2 opacity-50 transform -translate-y-1/2 bg-gray-300 text-black rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-white z-10 ${
            isAtStart ? "hidden" : ""
          }`} style={{top:"125px"}}
        >
          &lt;
        </button>
        <button
          onClick={scrollRight}
          className={`absolute right-2 opacity-50 transform -translate-y-1/2 bg-gray-300 text-black rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-white z-10 ${
            isAtEnd ? "hidden" : ""
          }`} style={{top:"125px"}}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default SliderSection;
