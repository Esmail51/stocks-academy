import React from "react";

const FeatureSection: React.FC = () => {
    return(
        <section className="relative bg-gray-100 min-h-screen flex flex-col lg:flex-row px-8 lg:px-24 py-16 items-stretch">
  {/* Left Section */}
  <div className="lg:w-1/2 flex flex-col justify-around space-y-6 ">
    <div className="flex items-center space-x-2">
      <span className="p-2 bg-purple-100 rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="h-6 w-6 text-purple-500"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m9-9H3" />
        </svg>
      </span>
      <p className="text-gray-700 font-semibold">Learn and Grow</p>
    </div>

    <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 text-start">
      Comprehensive Trading Education Tailored for You
    </h1>

    <p className="text-gray-600 text-start">
      Our academy offers in-person course packages, hybrid online and in-class packages, and online interactive course modules. These programs equip students with a working knowledge of technical analysis, charting tools, and techniques to analyze price action, stock price momentum, and both short- and long-term trends.
    </p>

    <button className="px-6 py-3 bg-[#4285F4] w-fit text-white rounded-lg shadow hover:bg-purple-100 hover:text-black transition">
      Join Now →
    </button>
  </div>

  {/* Right Section */}
  <div className="lg:w-1/2 grid grid-cols-1 mt-16 lg:mt-0 px-5">
    {[
      {
        id: "01",
        title: "Membership Perks",
        text: "Monthly Membership includes access to our online trading community and live technical analysis classes in our state-of-the-art boardroom in Markham, Ontario.",
      },
      {
        id: "02",
        title: "Automated News Channels",
        text: "Get up-to-date news articles accessible from your phone and browser, providing a one-stop source for reliable market news.",
      },
      {
        id: "03",
        title: "Weekly Coverage Videos",
        text: "Enjoy weekly snippets of technical analysis coverage, including general market conditions and charting patterns for various stock tickers.",
      },
    ].map((feature, index) => (
      <div
        key={feature.id}
        className={`relative flex flex-col ${
          index % 2 === 0 ? "items-start text-left" : "items-end text-right"
        }`}
      >
        <span className="block mt-2 text-6xl font-bold text-gray-200">
          {feature.id}
        </span>
        <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
        <p className="text-sm text-gray-600 mt-2 w-80">{feature.text}</p>
        <span className="block mt-4 w-16 h-1 bg-googleBlue-500"></span>
      </div>
    ))}
  </div>
</section>



    )
}
export default FeatureSection;