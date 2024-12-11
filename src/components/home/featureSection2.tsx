import React from "react";
import coachingImg from '../../assets/images/coaching.jpg';


const FeatureSection2: React.FC = () => {
  return (
    <section className="bg-purple-100 py-16 px-8">
    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left: Image */}
        <div>
            <img
                src={coachingImg}
                alt="Technical Analysis"
                className="w-full rounded-lg shadow-lg"
            />
        </div>

        {/* Right: Content */}
        <div className="text-start">
            {/* Main Heading */}
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
                Stock Market Graph
                Technical analysis and updated charts provided daily, accessible both on your phone and your desktop browser.
            </h2>

            {/* Subheading */}
            <p className="text-lg text-gray-600 mb-6">Live in person seminars in our boardroom with lessons on </p>

            {/* List of items */}
            <ul className="space-y-4">
                <li className="flex items-start space-x-2">
                    <span className="text-green-500 text-xl">✔</span>
                    <p className="text-gray-700">Charting & technical analysis </p>
                </li>
                <li className="flex items-start space-x-2">
                    <span className="text-green-500 text-xl">✔</span>
                    <p className="text-gray-700">Utilizing technical analysis tools & Indicators on charting platforms</p>
                </li>
                <li className="flex items-start space-x-2">
                    <span className="text-green-500 text-xl">✔</span>
                    <p className="text-gray-700">A live hands-on approach to charting with instructors</p>
                </li>
            </ul>
        </div>
    </div>
</section>
  );
};

export default FeatureSection2;