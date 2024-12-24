import React, { useState, useEffect } from "react";
import quoteImage from "../../assets/images/ed-quot.png"

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
        "Honest opinion.... It was extrmely heartwarming to see that you cared about the class... The way you were trying to educate and the amount you were trying to teach us was above and beyond!",

    },
    {
      id: 3,
      content:
        "I bought my first car 3 weeks ago from making good plays lol",

    },
    {
      id: 4,
      content:
        "Hi Saru! Thank you for a very well structured class. I greatly appreciate the knowledge you shared! Feeling much more confident trading stocks now. I actually paid off my course within the week the first week making $400+ with just $1500 accounts",

    },
    {
      id: 5,
      content:
        "Thank you for a very well articulated and interactive session this morning. I came in with very limited knowledge about stock trading, but left feeling very enthusiastic about diversifying my portfolio. You are an excellent SME, and I feel comfortable in knowing that I am in good hands to set me on the right track.",

    },
  ];

  return (
    <div className="relative mx-auto px-6 bg-gray-50">
      {/* Section Heading */}
      <div className="text-center mb-10 pt-10">
        <p className="text-[#4285F4] text-xl font-thin">
          Testimonial
        </p>
        <h4 className="text-4xl font-bold text-gray-800 mt-5">
          Creating A Community Of Life Long Learners.
        </h4>
      </div>

      {/* Horizontal Scrollable Testimonials */}
      <div className="overflow-x-auto h-[400px] lg:ms-10 lg:me-10 ms-0 me-0" style={{ scrollbarWidth: "none", marginTop: "70px" }}>
        <div className="flex space-x-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white shadow-md m-6 rounded-lg min-w-[300px] max-w-[300px] flex-shrink-0 border border-gray-200 relative"
            >
              {/* Quote Icon */}
              <div className="ed-testimonial-quote" style={{
                position: "absolute",
                top: "-29px",
                left: "-20px",
              }}>
                <img decoding="async" src={quoteImage} alt="" />
              </div>
              <p className="text-gray-600 text-start m-4" style={{ alignItems: "center", fontWeight: 400, fontSize: "13px", lineHeight: 1.9,}}>
                {testimonial.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>

  );
};
export default SliderSection;
