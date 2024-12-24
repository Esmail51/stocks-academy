import React from "react";
import img1 from "../../assets/images/Old Classroom Teaching_edited.avif";
import img2 from "../../assets/images/Quality Classroom Picture 2 .avif";
import img3 from "../../assets/images/Quality Classroom Picture .avif";
import img4 from "../../assets/images/Classroom Teaching.avif";
import { Link } from "react-router-dom";

const CoursesList = () => {
  const academicPackages = [
    {
      id: 1,
      image: img1,
      heading:
        "Introduction to Technical Analysis and Understanding the Stock Market",
      content:
        "A comprehensive 7-hour seminar course in Toronto covering introductory concepts of the North American Equity stock market. Students will learn in an interactive-style boardroom limited to 6 persons, where students will gain hands-on knowledge of diverse aspects of technical analysis, charting tools, understanding of indicators, broader markets, risk management tools.",
      page: "intro_to_technical_analysis_and_understanding",
    },
    {
      id: 2,
      image: img2,
      heading: "In-Depth Technical Analysis Training",
      content:
        "A comprehensive 5-hour class in Toronto covering advanced technical analysis, charting tools, understanding of indicators, broader markets, risk management & swing trading techniques.",
      page: "in_depth_technical_analysis_training",
    },
    {
      id: 3,
      image: img4,
      heading: "Options 101: An Introduction to Options Trading",
      content:
        "A comprehensive 5-hour class in Toronto covering introductory concepts of Options Trading and application of Options Trading to diverse aspects of technical analysis, charting tools, understanding of indicators, broader markets, risk management & Options Trading Techniques.",
      page: "an_introduction_to_options_trading",
    }
  ];

  return (
    <section className="bg-gray-50 py-12 px-8 lg:px-24">
      <div className="text-start mb-12 lg:mb-16">
  <h2 className="text-4xl font-bold text-gray-900 mb-4 lg:text-center">
    Academy Packages
  </h2>
  <h3 className="text-2xl font-semibold text-gray-800 mb-6 lg:text-center">
    Stock Market & Technical Analysis
  </h3>
  <p className="text-lg text-gray-700 leading-relaxed mb-6">
    Our comprehensive 7-hour seminar in Toronto is designed to introduce you to the fundamentals of the North American Equity stock market. Gain valuable insights and hands-on experience that will lay the foundation for your success in the stock market.
  </p>
  <p className="text-lg text-gray-700 leading-relaxed">
    In this interactive-style boardroom course, limited to just 6 students, you will delve into various aspects of technical analysis, charting tools, risk management, and more. This course offers a personalized learning environment to ensure you gain the practical knowledge needed for a confident start in trading.
  </p>
</div>

      <div className="flex flex-col lg:flex-row gap-12">
        <div className="lg:w-4/5 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 text-center">
          {academicPackages.map((packageItem) => (
            <div
              key={packageItem.id}
              className="bg-white shadow-xl rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out"
            >
              <img
                src={packageItem.image}
                alt={packageItem.heading}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{packageItem.heading}</h3>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full lg:w-1/5 text-center flex justify-center items-center">
          <Link to="/courses">
            <button className="px-8 py-3 bg-purple-600 text-white text-lg rounded-full hover:bg-purple-700 transition duration-200">
              Explore More →
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CoursesList;
