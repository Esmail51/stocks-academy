import React from "react";
import coachingImg from '../../assets/images/deposit1 (1).jpg';


const FeatureSection2: React.FC = () => {
  return (
    <section className="bg-purple-600 from-blue-600 to-blue-500 text-white relative py-8 lg:px-24 px-8">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 opacity-75"></div>
    <div className=" mx-auto grid grid-cols-1 lg:flex lg:justify-between gap-8 items-start  relative">
        {/* Left: Image */}
        <div>
            <img
                src={coachingImg}
                alt="Technical Analysis"
                className="w-[1200px]  rounded-lg shadow-lg"
            />
        </div>

        {/* Right: Content */}
        <div className="text-start">
            {/* Main Heading */}
            <h2 className="text-3xl font-semibold text-white mb-4">
                Stock Market Graph
                Technical analysis and updated charts provided daily, accessible both on your phone and your desktop browser.
            </h2>

            {/* Subheading */}
            <p className="text-lg text-gray-300 mb-6">Live in person seminars in our boardroom with lessons on </p>

            {/* List of items */}
            <ul className="space-y-4">
                <li className="flex items-start space-x-2">
                    <span className="text-green-500 text-xl">✔</span>
                    <p className="text-gray-200">Charting & technical analysis </p>
                </li>
                <li className="flex items-start space-x-2">
                    <span className="text-green-500 text-xl">✔</span>
                    <p className="text-gray-200">Utilizing technical analysis tools & Indicators on charting platforms</p>
                </li>
                <li className="flex items-start space-x-2">
                    <span className="text-green-500 text-xl">✔</span>
                    <p className="text-gray-200">A live hands-on approach to charting with instructors</p>
                </li>
            </ul>
        </div>
    </div>
</section>
  );
};

export default FeatureSection2;