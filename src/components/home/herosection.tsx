import React from 'react';
import backGroundVideo from '../../assets/vedios/file.mp4';
import img1 from '../../assets/images/Untitled-design-7.png.webp'





const HeroSection: React.FC = () => {

  return (

<div className="flex flex-col pt-28 md:flex-row items-center justify-around px-6 md:px-12 lg:px-24 py-12 ">
  {/* Left Section */}
  <div className="flex-grow max-w-lg text-center md:text-left">
    <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
    Strictly Stocks <br />Academy
    </h1>
    <p className='text-gray-800 text-2xl font-medium mb-3'>Preparation meets Profits</p>
    <p className="text-gray-600 mb-6">
    Strictly Stocks is an online trading community where traders come together to learn technical analysis tools to become more educated, efficient, and profitable traders.
    </p>
    <div className="flex justify-center md:justify-start space-x-4">
      <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition">
        Get Started
      </button>
    </div>
  </div>

  {/* Right Section */}
  <div className="flex flex-col md:flex-row items-stretch w-full md:w-[43%] space-x-4 mt-12 md:mt-0">
    {/* Left Image with Stats */}
    <div className="flex flex-col w-full">
      {/* Image */}
      <div className="relative flex-grow h-full">
        <img
          src="https://templates.sparklethings.com/virtura/wp-content/uploads/sites/31/2024/12/image-ZWV2MLM.jpg"
          alt="Students"
          className="rounded-lg object-cover h-full w-full"
        />
      </div>
      {/* Stats */}
      <div className="flex justify-around border border-purple-500 py-4 mt-4 rounded-lg bg-white">
        <div className="text-center">
          <h3 className="text-3xl font-bold">000+</h3>
          <p className="text-gray-600">Students</p>
        </div>
        <div className="text-center">
          <h3 className="text-3xl font-bold">000+</h3>
          <p className="text-gray-600">Courses</p>
        </div>
      </div>
    </div>

    {/* Right Image */}
    <div className="relative w-full h-auto">
      <img
        src="https://templates.sparklethings.com/virtura/wp-content/uploads/sites/31/2024/12/image-HY6B4QB.jpg"
        alt="Student using tablet"
        className="rounded-lg object-cover h-full w-full"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 rounded-lg">
        <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14.752 11.168l-6.586-3.795A1 1 0 007 8.264v7.471a1 1 0 001.166.986l6.586-3.796a1 1 0 000-1.737z"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</div>




  );
};

export default HeroSection;
