import React from 'react'
import img1 from '../../assets/images/Untitled-design-7.png.webp'


export default function heroSection2() {
  return (
    <section className="relative bg-white
 text-black py-8 lg:pb-5 lg:pt-15 px-5 lg:px-24 z-10  ">
      <div className="absolute inset-0 z-20 opacity-20">
        {/* Decorative SVG or Background Pattern */}
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#ffffff"
            fillOpacity="0.3"
            d="M0,64L48,80C96,96,192,128,288,160C384,192,480,224,576,208C672,192,768,128,864,112C960,96,1056,128,1152,160C1248,192,1344,224,1392,240L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto relative z-20">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-5xl font-extrabold bg-clip-text text-transparent bg-[#4285F4] drop-shadow-lg">
            Master the Markets
          </h2>
          <h3 className="text-3xl font-semibold mt-4">
            Empower Your Trading with Expert Insights
          </h3>
        </div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row gap-8 text-start">
          {/* Text Boxes */}
          <div className="flex-1 bg-[#4285F4] text-gray-200 hover:bg-blue-50 hover:text-black rounded-lg shadow-lg p-6 transform transition duration-300 hover:scale-105">
            <p className="text-lg leading-relaxed">
              Strictly Stocks Academy offers a series of comprehensive in-person
              classes held in a state-of-the-art boardroom in Toronto, Ontario,
              where professionals of all backgrounds come to learn the tools to
              become more informed, efficient, and adept in their analysis of
              Equity markets, Commodity markets, and Crypto Markets.
            </p>
          </div>

          <div className="flex-1 bg-[#4285F4] text-gray-200 hover:bg-blue-50 hover:text-black rounded-lg shadow-lg p-6 transform transition duration-300 hover:scale-105">
            <p className="text-lg leading-relaxed">
              Studying historic chart patterns and understanding price action using
              a myriad of technical analysis indicators allows for more informed,
              efficient, and profitable decision-making.
            </p>
          </div>

          <div className="flex-1 bg-[#4285F4] text-gray-200 hover:bg-blue-50 hover:text-black rounded-lg shadow-lg p-6 transform transition duration-300 hover:scale-105">
            <p className="text-lg leading-relaxed">
              Students dive into a curriculum to equip themselves and refine their
              knowledge of technical analysis tools and risk management systems,
              becoming more resourced and adept investors and traders.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-10 text-center">
          <a
            href="/courses"
            className="inline-block bg-googleBlue-500  text-white font-semibold text-lg px-5 py-3 rounded-full shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-105"
          >
            Explore Courses
          </a>
        </div>
      </div>
    </section>



  )
}
