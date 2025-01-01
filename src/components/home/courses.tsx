import { useEffect } from "react";
import img4 from "../../assets/images/Classroom Teaching.avif";
import img1 from "../../assets/images/Old Classroom Teaching_edited.avif";
import img2 from "../../assets/images/Quality Classroom Picture 2 .avif";
import Header from "../header";

const Courses = () => {
  const academicPackages = [
    {
      id: 1,
      image: img1,
      heading:
        "Introduction to Technical Analysis and Understanding the Stock Market",
        page: "intro_to_technical_analysis_and_understanding",
      points: [
        "Comprehensive 7-hour seminar course in Toronto.",
        "Introductory concepts of the North American Equity stock market.",
        "Interactive-style boardroom setup (limited to 6 persons).",
        "Hands-on knowledge of technical analysis, charting tools, and indicators.",
        "Broader markets and risk management tools.",
      ],
    },
    {
      id: 2,
      image: img2,
      heading: "In-Depth Technical Analysis Training",
      page: "in_depth_technical_analysis_training",
      points: [
        "Comprehensive 5-hour class in Toronto.",
        "Advanced technical analysis and charting tools.",
        "Understanding of indicators and broader markets.",
        "Risk management techniques and swing trading strategies.",
      ],
    },
    {
      id: 3,
      image: img4,
      heading: "Options 101: An Introduction to Options Trading",
      page: "an_introduction_to_options_trading",
      points: [
        "Comprehensive 5-hour class in Toronto.",
        "Introductory concepts of Options Trading.",
        "Application of Options Trading to technical analysis and charting tools.",
        "Understanding of indicators, broader markets, and risk management.",
        "Options Trading techniques.",
      ],
    },
  ];

    // Scroll to the top when the component is mounted
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <>
      <Header />
      {/* Add padding or margin to avoid overlap */}
      <section className="py-16 ">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">
            Affordable Courses, Exceptional Learning
          </h2>
          <p className="text-gray-600 mt-4">
            Explore our tailored courses to elevate your knowledge and skills.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-4/5 mx-auto ">
          {academicPackages.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-lg shadow-md flex flex-col justify-between p-6 transform hover:scale-105 transition duration-300 ease-in-out"
            >
              <img
                src={course.image}
                alt={course.heading}
                className="w-full h-48 object-cover rounded-t-lg mb-4"
              />
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {course.heading}
                </h3>
                <ul className="text-gray-600 text-left space-y-2 mb-6">
                  {course.points.map((point, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-purple-700 font-bold mr-2">✔</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-auto">
                <a href={course.page}>
                <button className="bg-[#4285F4] text-white py-2 px-6 rounded-lg hover:bg-white hover:text-black hover:border transition duration-300 w-full">
                  Learn More
                </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Courses;
